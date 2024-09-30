import tools from "./data_reduced.json";

export default function Home() {
    return (
        <>
            <main>
                <div className="m-8 max-w-xl mx-auto">
                    <h1 className="text-3xl font-bold">
                        Open Source LLM Tools
                    </h1>
                    <span className="text-zinc-400 font-medium text-xs">
                        Updated every 12 hours
                    </span>
                    <div className="my-4">
                        <p>
                            Best viewed on desktops. On a phone screen, some
                            columns are hidden.
                        </p>
                        <p>
                            When a new repo is indexed, changes in stars in the
                            last day/week are default to 0.
                        </p>
                        <p>
                            Full analysis:{" "}
                            <a
                                href="https://huyenchip.com/2024/03/14/ai-oss.html"
                                target="_blank"
                                className="text-blue-500 hover:underline hover:text-blue-600"
                            >
                                What I learned from looking at 900 most popular
                                open source AI tools.
                            </a>
                        </p>
                        <p>
                            Find these repos on GitHub at{" "}
                            <a
                                href="https://github.com/stars/chiphuyen/lists/cool-llm-repos"
                                target="_blank"
                                className="text-blue-500 hover:underline hover:text-blue-600"
                            >
                                cool-llm-repos
                            </a>
                            . See the most active{" "}
                            <a
                                href="https://huyenchip.com/llama-devs"
                                target="_blank"
                                className="text-blue-500 hover:underline hover:text-blue-600"
                            >
                                open source AI developers
                            </a>
                            .
                        </p>
                        <p>
                            Add{" "}
                            <a
                                href="https://forms.gle/bWqYJDynx8bRqXvGA"
                                target="_blank"
                                className="text-blue-500 hover:underline hover:text-blue-600"
                            >
                                missing repos
                            </a>{" "}
                            to the list.
                        </p>
                    </div>
                    <div className="my-4 max-w-lg">
                        <form
                            action=""
                            className="flex space-x-2 items-stretch text-sm"
                        >
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Get email updates about my new posts"
                                className="w-full rounded-md px-4 py-2 text-zinc-800 border border-zinc-200 bg-zinc-50"
                            />
                            <input
                                type="submit"
                                value="Subscribe"
                                className="bg-lime-700 text-white font-semibold px-4 rounded-md"
                            />
                        </form>
                    </div>
                </div>
                <div className="px-4 overflow-y-auto">
                    <table className="mx-auto table-auto border-collapse border">
                        <thead className="bg-zinc-100">
                            <tr>
                                <th className="text-left font-medium text-zinc-700 border border-zinc-200 px-3 py-1.5 text-sm">
                                    Repo
                                </th>
                                <th className="text-left font-medium text-zinc-700 border border-zinc-200 px-3 py-1.5 text-sm">
                                    Category
                                </th>
                                <th className="text-left font-medium text-zinc-700 border border-zinc-200 px-3 py-1.5 text-sm">
                                    Tag
                                </th>
                                <th className="text-left font-medium text-zinc-700 border border-zinc-200 px-3 py-1.5 text-sm">
                                    Description
                                </th>
                                <th className="text-left font-medium text-zinc-700 border border-zinc-200 px-3 py-1.5 text-sm">
                                    Stars
                                </th>
                                <th className="text-left font-medium text-zinc-700 border border-zinc-200 px-3 py-1.5 text-sm">
                                    Forks
                                </th>
                                <th className="text-left font-medium text-zinc-700 border border-zinc-200 px-3 py-1.5 text-sm">
                                    Contributors
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tools.map(
                                (tool: { [key: string]: number | string }) => (
                                    <tr key={tool["repo"]}>
                                        {[
                                            "repo",
                                            "category",
                                            "subcat",
                                            "description",
                                            "stars",
                                            "forks",
                                            "contributors",
                                        ].map((stat) => (
                                            <td
                                                key={`${tool["repo"]}-${stat}`}
                                                className={`truncate px-3 py-1.5 text-sm border border-zinc-200 max-w-[18rem] ${
                                                    typeof tool[stat] ===
                                                    "number"
                                                        ? "text-right"
                                                        : "text-left"
                                                }`}
                                            >
                                                {tool[stat]}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
            <footer className="mt-8 border-t border-zinc-200 bg-zinc-100 py-4 px-8">
                <span className="text-sm font-medium text-zinc-400">
                    © Llama Police {new Date().getFullYear()}
                </span>
            </footer>
        </>
    );
}
