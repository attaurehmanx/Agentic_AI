import chainlit as cl
from dotenv import load_dotenv
import os
from agents import Agent, Runner, AsyncOpenAI, OpenAIChatCompletionsModel, RunConfig, function_tool
import requests

load_dotenv()
gemini_api_key = os.getenv("GEMINI_API_KEY")

# Check if the API key is present; if not, raise an error
if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY is not set. Please ensure it is defined in your .env file.")

#Reference: https://ai.google.dev/gemini-api/docs/openai
external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client
)

config = RunConfig(
    model=model,
    model_provider=external_client,
    tracing_disabled=True
)


@function_tool
def crypto_price(coin: str) -> str:
    "get the coin price"
    try:
        url = f"https://api.binance.com/api/v3/ticker/price?symbol={coin.upper()}"
        response = requests.get(url)
        if response.status_code != 200:
            return f"No data found for {coin}. incorrect symbol."
        
        data= response.json()

        if "price" not in data:
            return f"No price found for {coin}. Maybe incorrect symbol."
        
        symbol = data["symbol"]
        price = data["price"]
        return f"{symbol} price is {price}."
    except Exception as e:
        return f"Error occurred while fetching the {coin}:{e}"

    

crypto = Agent(
    name= "Cryptocurrency price",
    instructions= "your are helpful agent.you will show the real symbol and price of cryptocurrency by using binance API.",
    tools=[crypto_price]
)

@cl.on_chat_start
async def load_history():
    cl.user_session.set("history",[])
    await cl.Message("I am a crypto agent. Which coin price do you want to know.(e.g COINUSDT)").send()

@cl.on_message
async def crypto_handler(message: cl.Message):
    history = cl.user_session.get("history",[])

    history.append({"role": "user", "content": message.content})

    result = await Runner.run(
        crypto,
        input=history,
        run_config= config

    )

    history.append({"role":"assistant", "content":result.final_output})
    cl.user_session.set("history", history)
    await cl.Message(content=result.final_output).send()
