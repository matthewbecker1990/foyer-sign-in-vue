<template>
  <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <div
      class="relative rounded-2xl px-6 py-10 bg-lpsred text-lpsyellow overflow-hidden shadow-xl sm:px-12"
    >
      <div class="relative">
        <div class="sm:text-center">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What's your name?
          </h2>
        </div>
        <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
          <div class="min-w-0 flex-1">
            <label for="cta_email" class="sr-only">Your name</label>
            <input
              id="cta_email"
              type="email"
              class="block w-full rounded-md px-5 py-3 text-gray-900 placeholder-gray-500 border-none focus:ring-4 focus:ring-lpsyellow focus:ring-offset-2 focus:ring-offset-lpsred"
              placeholder="Enter your name"
            />
          </div>
        </form>
        <div>
          <div class="mt-6 sm:mx-auto sm:max-w-lg sm:flex text-center">
            <router-link
              to="/email"
              class="block w-full rounded-md px-5 py-3 bg-lpsyellow font-medium text-lpsred shadow hover:bg-white focus:outline-none focus:ring-4 focus:ring-lpsyellow focus:ring-offset-2 focus:ring-offset-lpsred sm:px-10"
            >
              Next
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <p class="mx-auto max-w-2xl text-md mt-12 text-lpsred">
      Help us save you time by providing accurate details. Just like physically
      signing in, this will be logged for auditing purposes as well as for use
      as a personnel log in case of an emergency, such as an evacuation.
    </p>
  </div>
</template>
