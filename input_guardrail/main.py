from connection import config
from agents import Agent, Runner, input_guardrail, GuardrailFunctionOutput, InputGuardrailTripwireTriggered
import asyncio
from pydantic import BaseModel


class FatherOutput(BaseModel):
    response: str
    isACon26ormore: bool



# guardrail agent
father = Agent(
    name="Father",
    instructions = """
        You are a father agent. Your task is to keep the AC temperature at 26°C or higher.
        You may increase it above 26, but never decrease it below 26.
        If the son asks to lower it below 26, do not allow it and set isACon26ormore to False.
        Respond in JSON with keys: response, isACon26ormore.
        """,
    output_type=FatherOutput
)

@input_guardrail
async def father_guardrail(cxt, agent, input):
    result = await Runner.run(
        father,
        input,
        run_config=config
    )
    print(result.final_output)
    return GuardrailFunctionOutput(
        output_info=result.final_output.response,
        tripwire_triggered=not result.final_output.isACon26ormore
    )

# main agent
son = Agent(
    name= "son agent",
    instructions="you are son agent.",
    input_guardrails=[father_guardrail]
)

async def main():
    try:
        result = await Runner.run(
            son,
            input="Today weather is hot. I want keep AC on 20. ",
            run_config=config
        )
        print("OK")
    except InputGuardrailTripwireTriggered:
        print("bill baap ne dena hn")
        


if __name__ == '__main__':
    asyncio.run(main())