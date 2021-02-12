<template>
  <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <div
      class="relative rounded-2xl px-6 py-10 bg-lpsred text-lpsyellow overflow-hidden shadow-xl sm:px-12"
    >
      <div class="relative">
        <div class="sm:text-center">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Who are you?
          </h2>
        </div>
        <!-- <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
          <div class="min-w-0 flex-1">
            <label for="cta_email" class="sr-only">Your name</label>
            <input
              id="cta_email"
              type="email"
              class="block w-full rounded-md px-5 py-3 text-gray-900 placeholder-gray-500 border-none focus:ring-4 focus:ring-lpsyellow focus:ring-offset-2 focus:ring-offset-lpsred"
              placeholder="Enter your name"
            />
          </div>
        </form> -->
        <ul
          class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10"
        >
          <base-role-component
            title="Parent"
            description="Parent or Caregiver"
            @click="selectRole('parent')"
            :class="
              role == 'parent'
                ? 'bg-lpsyellow text-lpsred'
                : 'bg-white text-gray-900'
            "
          >
            <img
              class="w-24 h-24 flex-shrink-0 mx-auto rounded-full"
              src="@/assets/parent.png"
              alt=""
          /></base-role-component>
          <base-role-component
            @click="selectRole('teacher')"
            title="Teacher"
            description="Teacher from another school"
            :class="
              role == 'teacher'
                ? 'bg-lpsyellow text-lpsred'
                : 'bg-white text-gray-900'
            "
          >
            <img
              class="w-24 h-24 flex-shrink-0 mx-auto rounded-full"
              src="@/assets/teacher.png"
              alt=""
          /></base-role-component>
          <base-role-component
            @click="selectRole('other-employee')"
            title="Other Employee"
            description="Other DET Employee"
            :class="
              role == 'other-employee'
                ? 'bg-lpsyellow text-lpsred'
                : 'bg-white text-gray-900'
            "
          >
            <img
              class="w-24 h-24 flex-shrink-0 mx-auto rounded-full"
              src="@/assets/other-employee.png"
              alt=""
          /></base-role-component>
          <base-role-component
            @click="selectRole('contractor')"
            title="Contractor"
            description="Electrician, Plumber etc."
            :class="
              role == 'contractor'
                ? 'bg-lpsyellow text-lpsred'
                : 'bg-white text-gray-900'
            "
          >
            <img
              class="w-24 h-24 flex-shrink-0 mx-auto rounded-full"
              src="@/assets/contractor.png"
              alt=""
          /></base-role-component>
          <base-role-component
            @click="selectRole('supplier')"
            title="Supplier"
            description="Service Provider, Sales, Delivery etc."
            :class="
              role == 'supplier'
                ? 'bg-lpsyellow text-lpsred'
                : 'bg-white text-gray-900'
            "
          >
            <img
              class="w-24 h-24 flex-shrink-0 mx-auto rounded-full"
              src="@/assets/suppliers.png"
              alt=""
          /></base-role-component>
          <base-role-component
            title="Other"
            description="Any other roles"
            @click="selectRole('other')"
            :class="
              role == 'other'
                ? 'bg-lpsyellow text-lpsred'
                : 'bg-white text-gray-900'
            "
          >
            <img
              class="w-24 h-24 flex-shrink-0 mx-auto rounded-full"
              src="@/assets/other.png"
              alt=""
          /></base-role-component>
        </ul>
        <div v-if="role && role != 'parent'">
          <h2 class="mt-12 text-lg sm:mx-auto sm:max-w-lg mb-4">
            What School, Company or Business are you representing?
          </h2>
          <form action="#" class=" sm:mx-auto sm:max-w-lg sm:flex">
            <div class="min-w-0 flex-1">
              <label for="cta_email" class="sr-only">Your name</label>
              <input
                id="cta_email"
                type="text"
                class="block w-full rounded-md px-5 py-3 text-gray-900 placeholder-gray-500 border-none focus:ring-4 focus:ring-lpsyellow focus:ring-offset-2 focus:ring-offset-lpsred"
                placeholder="School, Company or Business Name"
              />
            </div>
          </form>
        </div>
        <div>
          <div class="mt-12 sm:mx-auto sm:max-w-lg sm:flex text-center">
            <router-link
              to="/"
              class="block w-full rounded-md px-5 py-3 bg-lpsyellow font-medium text-lpsred shadow hover:bg-white focus:outline-none focus:ring-4 focus:ring-lpsyellow focus:ring-offset-2 focus:ring-offset-lpsred sm:px-10"
            >
              Next
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <p class="mx-auto max-w-2xl text-md mt-12 text-lpsred">
      Please select what type of guest you are. If you are a contractor, please
      see the office as there may be further documentation you will be required
      to complete.
    </p>
  </div>
</template>

<script>
import BaseRoleComponent from "../components/BaseRoleComponent.vue";
export default {
  components: {
    BaseRoleComponent,
  },
  data() {
    return {
      role: null,
    };
  },
  methods: {
    selectRole(role) {
      this.role = role;
    },
  },
};
</script>
