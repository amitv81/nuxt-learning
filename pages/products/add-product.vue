<template>
  <form @submit.prevent="submitForm">
    <input v-model="patientData.firstName" placeholder="First Name" />
    <input v-model="patientData.lastName" placeholder="Last Name" />
    <input v-model="patientData.mobile" placeholder="Mobile" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
//http://localhost:3300/add-record
require("dotenv").config();
const apiBaseUrl = import.meta.env.BASE_URL;
//####### Improved Version #######
import { patientData } from "../../modal/patient-modal";
const submitForm = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/add-record`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientData.value),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

//####### DESI ITEM #######
/*import { ref } from "vue";
const patientData = ref({
  firstName: "",
  lastName: "",
  mobile: 0,
  status: "1",
});

const submitForm = async () => {
  const { data: responseData } = await useFetch(
    "http://localhost:3300/add-record",
    {
      method: "post",
        body: {
          firstName: patientData.value.firstName,
          lastName: patientData.value.lastName,
          mobile: patientData.value.mobile,
          status: patientData.value.status,
        },
    }
  );

  console.log(responseData.value);
  
}; */
</script>
