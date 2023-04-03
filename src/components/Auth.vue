<template>
    <v-form
        class="d-flex flex-column pt-12 ma-auto"
        style="max-width: 360px"
        ref="form"
        @submit.prevent="submitHandler"
    >

      <img src="@/assets/icon/logo.svg" width="48px" class="align-self-center mb-6" >

      <h1 class="text-center mb-8">Log in to your account</h1>

      <div class="input_label">Email</div>

      <v-text-field
          outlined
          dense
          full-width
          label="name@hoteldomain.com"
          v-model="email"
          @update:error="validEmail = !$event"
          :rules="[rules.email]"
      >
        <template v-slot:append v-if="!validEmail">
          <img
              height="16"
              width="16"
              src="@/assets/icon/error-input-icon.svg"
              alt=""
          >
        </template>
      </v-text-field>

      <div class="input_label">Password</div>

      <v-text-field
          outlined
          dense
          full-width
          label="••••••••"
          type="password"
          v-model="password"
          @update:error="validPassword= !$event"
          :rules="[rules.password]"
      >
        <template v-slot:append v-if="!validPassword">
          <img
              height="16"
              width="16"
              src="@/assets/icon/error-input-icon.svg"
              alt=""
          >
        </template>
      </v-text-field>


      <div class="d-flex justify-space-between align-center">
        <v-checkbox
            light
            v-model="remember_me"
            label="Remember me"
            class="checkbox"
        ></v-checkbox>
        <div class="form_link">
          Forgot password
        </div>
      </div>


      <v-btn
          depressed
          block
          color="primary"
          class="button w-100 mb-8"
          type="submit"
      >
        Sign in
      </v-btn>

      <div class="d-flex align-self-center">
        <div class="mr-1">Can’t log in to your account?</div>
        <div class="form_link">Ask support</div>
      </div>

    </v-form>

</template>

<script>

export default {

  name: "Auth",

  data: () => {
    return {
      email: '',
      password:'',
      remember_me: true,

      validEmail: true,
      validPassword: true,

      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Please check email address'
        },
        password: value => !!value || 'Please fill in your password'
      },

    }
  },

  methods: {

    submitHandler () {
        if (this.$refs.form.validate()){
          console.log(this.email, this.password)
        }
        this.validEmail = this.$refs.form.inputs[0].valid
        this.validPassword = this.$refs.form.inputs[1].valid
      }

  },

}
</script>

<style scoped>
h1{
  font-size: 24px;
  line-height: 32px;
}

.input_label {
  color: #344054;
}

.button {
  font-size: 16px !important;
  text-transform: unset !important;
}

.form_link {
  color: #6941C6;
}

::v-deep .checkbox .v-label{
  font-size: 14px !important;
}

::v-deep .v-text-field__details {
  padding: 0 !important;
}

.v-text-field--outlined >>> fieldset {
  border-color: #D0D5DD
}

::v-deep .v-input__append-inner {
  margin: 0 !important;
  padding: 0 !important;
  align-self: center !important;
}

</style>