<template>
  <div class="rounded-2xl shadow-xl overflow-hidden bg-lpsred text-lpsyellow">
    <div
      class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
    >
      <div class="lg:self-center">
        <h2 class="text-5xl font-extrabold sm:text-5xl">
          <span class="block">Hi there!</span>
        </h2>
        <h3 class="text-3xl font-extrabold sm:text-3xl mt-5">
          Thank you for visiting Lansvale Public School.
        </h3>
        <p class="mt-4 text-lg leading-6">
          Are you a guest? Please sign in below.
        </p>
        <router-link
          to="/name"
          class="mt-8 bg-lpsyellow rounded-md px-6 py-3 inline-flex items-center text-base font-medium text-lpsred hover:bg-white focus:ring-4 focus:ring-lpsyellow focus:ring-offset-2 focus:ring-offset-lpsred"
          >Guest Sign In</router-link
        >
        <div
          class="mx-auto max-w-lg text-center bg-lpsyellow text-lpsred p-8 rounded-lg mt-16"
        >
          This is a demo and is not currently functional. Please see the office
          to sign in.
        </div>
      </div>
    </div>
  </div>
</template>
