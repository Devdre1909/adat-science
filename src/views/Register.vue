<template>
  <b-container>
    <h2 class="r-container">How to Apply</h2>
    <p>
      A token fee of one thousand five hundred and eighty (N1,580.00) naira
      would be charged for form processing before submission
    </p>
    <p>The payment would be made online through the application portal</p>
    <b-button variant="primary" @click="showRegisterForm">
      Register
    </b-button>
    <div style="margin: auto; margin:3rem auto; width: 80%;">
      <b-form @submit.prevent="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="First Name" label-for="fName">
          <b-form-input
            id="fName"
            v-model="form.firstName"
            type="text"
            required
            placeholder="Enter first name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Family Name"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.familyName"
            required
            type="text"
            placeholder="Enter family name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Email" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            required
            placeholder="Enter email"
            :state="emailValidation"
          ></b-form-input>
          <b-form-invalid-feedback :state="emailValidation">
            Must be a valid email
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="emailValidation">
            Looks Good.
          </b-form-valid-feedback>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Confirm email"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.cEmail"
            required
            placeholder="Enter email"
            :state="cEmailValidation"
          ></b-form-input>
          <b-form-invalid-feedback :state="cEmailValidation">
            Confirm Password must match with password
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="cEmailValidation">
            Looks Good.
          </b-form-valid-feedback>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>

export default {
  name: "RegisterVue",
  data() {
    return {
      form: {
        firstName: "",
        familyName: "",
        email: "",
        cEmail: ""
      },
      link: "",
      show: false
    };
  },
  methods: {
    onSubmit() {},
    showRegisterForm() {
      this.show = !this.show;
    },
    toast(toaster, append = false) {
      this.$bvToast.toast(
        `A confirmation has been sent to your email. Confirm your email to proceed.`,
        {
          title: `Verify Email`,
          toaster: toaster,
          solid: true,
          appendToast: append
        }
      );
    }
  },
  computed: {
    emailValidation() {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.form.email).toLowerCase());
    },
    cEmailValidation() {
      return this.form.email == this.form.cEmail;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.r-container {
  margin-top: 3rem;
}
</style>
