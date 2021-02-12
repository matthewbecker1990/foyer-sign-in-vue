<template>
  <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <div
      class="relative rounded-2xl px-6 py-10 bg-lpsred text-lpsyellow overflow-hidden shadow-xl sm:px-12 "
    >
      <div class="relative">
        <div class="sm:text-center">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What's your email?
          </h2>
        </div>
        <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
          <div class="min-w-0 flex-1">
            <label for="cta_email" class="sr-only">Your name</label>
            <input
              id="cta_email"
              type="email"
              class="block w-full rounded-md px-5 py-3 text-gray-900 placeholder-gray-500 border-none focus:ring-4 focus:ring-lpsyellow focus:ring-offset-2 focus:ring-offset-lpsred"
              placeholder="Enter your email"
            />
          </div>
        </form>
        <div class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
          <span class="flex-grow flex flex-col" id="availability-label">
            <span class="text-sm font-medium ">Email me?</span>
            <span class="text-sm leading-normal"
              >Email me a record of my sign in and out.</span
            >
          </span>
          <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->

          <button
            @click="toggle"
            type="button"
            class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-lpsred rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-lpsred focus:ring-lpsyellow"
            aria-pressed="false"
            aria-labelledby="availability-label"
            :class="isToggled ? 'bg-lpsyellow' : 'bg-gray-300'"
          >
            <span class="sr-only">Use setting</span>
            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
            <span
              aria-hidden="true"
              class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
              :class="isToggled ? 'translate-x-5' : ''"
            ></span>
          </button>
        </div>
        <div>
          <div class="mt-12 sm:mx-auto sm:max-w-lg sm:flex text-center">
            <router-link
              to="/role"
              class="block w-full rounded-md px-5 py-3 bg-lpsyellow font-medium text-lpsred shadow hover:bg-white focus:outline-none focus:ring-4 focus:ring-lpsyellow focus:ring-offset-2 focus:ring-offset-lpsred sm:px-10"
            >
              Next
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <p class="mt-12 mx-auto max-w-2xl text-md text-lpsred">
      Please provide us with an email in case we need to contact you. We can
      also send you a link to sign out in the event that you leave without
      signing out.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggled: false,
    };
  },
  methods: {
    toggle() {
      this.isToggled = !this.isToggled;
    },
  },
};
</script>
