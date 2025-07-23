import re
from connection import config
from agents import Agent, function_tool, Runner
import requests
import chainlit as cl

@function_tool
def shopping_agent(category: str):
    """
    Fetch products from API and filter by category.
    Return a readable summary of matching products.
    """
    url = "https://template-03-api.vercel.app/api/products"
    response = requests.get(url)

    if response.status_code != 200:
        return "error Failed to fetch product."
    data = response.json()["data"]

    results = [item for item in data if category.lower() in item["category"].lower()]
    
    if not results:
        return f"Category not found related this {category}"
    lists = []
    for item in results:
        # print(item.get("image"))
        lists.append({
            "name": item["productName"],
            "price": item["price"],
            "image": item["image"]
        })
    return lists

@cl.on_chat_start
async def welcome():
    await cl.Message(content="Welcome to Shoes Shop. How can I assist you.").send()  


agent = Agent(
    name= "Shopping Agent",
    instructions="You are a helpful shopping agent. Retrieve products based on the user's provided category using an API. Format and present the product list by separating and displaying each product's name, price, and image.",
    tools=[shopping_agent]
)

@cl.on_message
async def chatting(message: cl.Message):

    result = await Runner.run(
        agent,
        input=message.content,
        run_config=config
    )

    await cl.Message(content=result.final_output).send()
