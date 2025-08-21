import asyncio
from connection import config
from agents import Agent, Runner, function_tool, RunContextWrapper
from pydantic import BaseModel

class Info(BaseModel):
    account_number: str | int
    customer_name: str
    account_balance: int
    account_type: str

info = Info(account_number="ACC-789456", customer_name="Atta Ur Rehman", account_balance=30000, account_type="saving")


@function_tool
async def local_info(wrapper: RunContextWrapper[Info]):
    return f"The user account info is {wrapper.context} "

# main agent
account = Agent(
    name="Information agent",
    instructions="You are a helpful assistant, always call the tool to get user's account information",
    tools=[local_info]
)

async def main():
    result = await Runner.run(
        account,
        "tell me account name",
        run_config=config,
        context=info
    )
    print(result.final_output)


if __name__ =='__main__':
    asyncio.run(main())