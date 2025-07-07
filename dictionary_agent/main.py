import os
from dotenv import load_dotenv
import chainlit as cl
from agents import Agent, AsyncOpenAI, RunConfig, OpenAIChatCompletionsModel, function_tool, Runner
import requests, re, random, httpx

load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")

if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY is not set. Please ensure it is defined in your .env file.")

external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client,
)

config = RunConfig(
    model=model,
    model_provider=external_client,
    tracing_disabled=True,
)

@function_tool
def dict_api(word:str) ->str:
    try:
        url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
        response = requests.get(url)
        if response.status_code != 200:
            return f"request error"
        
        data = response.json()
        meanings = data[0].get("meanings",[])
        answer = f"Definition for {word}:\n"

        for meaning in meanings:
            part_of_speech = meaning.get("partOfSpeech", "unknown")
            for i, definition in enumerate(meaning.get("definitions",[]),1):
                answer += f"- {part_of_speech} {definition['definition']}\n"
                if i >= 2:
                    break
        return answer

    except Exception as e:
        return f"Found error while fetching {e}"

agent = Agent(
    name="Dictionary",
    instructions="You are helpful dictionary agent. User will ask you like define hello etc. you will answer the user definition of word and part-of-speech that belongs to the word. ",
    tools=[dict_api]
)

@cl.on_chat_start
async def welcome():
    await cl.Message(content="I am a dictionary agent. Please ask me to define a word, like:\n`Define courage`").send()

@cl.on_message
async def chat_handler(message: cl.Message):
    text = message.content.strip().lower()

    match = re.search(r"(?:define|what is|meaning of)\s+['\"]?([\w-]+)", text)

    if match:
        word = match.group(1)

        result =await Runner.run(
            agent,
            input=word,
            run_config=config
        )
        print(word)

        await cl.Message(content=result.final_output).send()
    else:
        async with httpx.AsyncClient() as client:
            response = await client.get("https://random-word-api.herokuapp.com/word")
            if response.status_code == 200:
                data = response.json()
                example = data[0]
            else:
                example = "speak"
        await cl.Message(content=f"❓ Please ask me to define a word. Try something like:\n"
                f"`Define {example}`, `meaning of {example}`, or `What is {example}?`").send()

