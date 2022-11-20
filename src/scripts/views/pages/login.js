const login = {
  init() {
    return `
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div class="flex flex-col items-center justify-center text-center space-y-2">
                        <div class="font-semibold text-3xl">
                            <p>Login Admin</p>
                        </div>
                    </div>
    
                    <div>
                        <form action="" method="post">
                            <div class="flex flex-col space-y-16">
                                <div class="flex flex-col mx-auto w-full max-w-xs">
                                    <div class="mb-4">
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                    </div>
                                    <div class="mb-6">
                                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
                                    </div>
                                </div>
            
                                <div class="flex flex-col">
                                    <div>
                                        <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-red-500 border-none text-white text-sm shadow-sm">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    `;
  },
};

export default login;
