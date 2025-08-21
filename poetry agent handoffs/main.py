import asyncio
from connection import config
from agents import Agent, Runner

dramatic = Agent(
    name="Dramatic agent",
    instructions="""
        You are the Dramatic Poet Agent.
        Your job is to determine whether a poem is a **dramatic poem**.
        if the poem is written as a **monologue or dialogue**, often resembling **a scene in a play**, with emotion revealed through **speech and conflict**."""
)

narrative = Agent(
    name="narrative agent",
    instructions="""
    You are the Narrative Poet Agent.
        Your job is to determine whether a poem is a **narrative poem**.if the poem tells a **story** with a **plot**, **characters**, and **events** (even if it's short)."""
)

lyrics = Agent(
    name= "lyrics agent",
    instructions="""
        You are the Lyrical Poet Agent.
        Your job is to determine whether a poem is a **lyrical poem**.if the poem expresses **personal emotions**, **internal thoughts**, or **deep feelings**, usually in a **musical or compact** form.
        """
)

mainn = Agent(
    name="parent agent",
    instructions="""You are the Poetry Classification Coordinator.
        Your task is to receive a poem and handoff it to one of the three expert sub-agents:
        1. Narrative Agent
        2. Lyrical Agent
        3. Dramatic Agent
        """,
    handoffs=[lyrics,narrative,dramatic]
)

async def main():
    result = await Runner.run(

        starting_agent=mainn,
        input="""I wandered lonely as a cloud  
            That floats on high o’er vales and hills,  
            When all at once I saw a crowd,  
            A host of golden daffodils...""",
        run_config=config
    )
    print(result.final_output)

if __name__ == '__main__':
    asyncio.run(main())