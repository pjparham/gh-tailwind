export default function RepoStats() {
  return (
    <div className="repo-stats flex items-center justify-between px-8 py-4">
        <div className="flex">
            <svg className="w-4 fill-current text-gray-600" aria-hidden="true" viewBox="0 0 16 16" data-view-component="true">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <div className="flex items-center text-xl ml-2">
                <a href="#" className="text-blue-600 hover:underline">tailwindcss</a>
                <span className="ml-1">/</span>
                <a href="#" className="text-blue-600 hover:underline ml-1 font-semibold">tailwindcss</a>
            </div>
        </div>
        <div className="flex text-xs space-x-2">
            <div className="flex">
                <button className="border boarder-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
                    <svg className="fill-curent text-gray-600 w-4" aria-hidden="true" viewBox="0 0 16 16" data-view-component="true">
                        <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                    </svg>
                    <div>Watch</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 ml-1">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </button>
                <a className="border boarder-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600">430</a>
            </div>
            <div className="flex">
                <button className="border boarder-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
                    <svg className="fill-curent text-gray-600 w-4" aria-hidden="true" viewBox="0 0 16 16" data-view-component="true">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    <div>Star</div>
                </button>
                <a className="border boarder-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600">23.5K</a>
            </div>
            <div className="flex">
                <button className="border boarder-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
                    <svg className="fill-curent text-gray-600 w-4" aria-hidden="true" viewBox="0 0 16 16" data-view-component="true">
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                    </svg>
                    <div>Fork</div>
                </button>
                <a className="border boarder-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600">1.2K</a>
            </div>
        </div>
        

    </div>
  )
}
