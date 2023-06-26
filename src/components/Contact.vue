<template>
  <v-col cols="12" id="contact">
    <form class="contactForm" @submit.prevent="sendMail">
      <div class="form-row">
        <div class="form-group">
          <input type="text" id="msg-email" class="form-control" placeholder="Your Name" v-model="email" />
        </div>
        <div class="form-group">
          <input type="text" id="msg-name" class="form-control" placeholder="Your Email" v-model="name" />
        </div>
      </div>

      <div class="form-group">
        <input type="text" id="msg-subject" class="form-control" placeholder="Subject" v-model="subject" />
      </div>
      <div class="form-group">
        <textarea rows="10" id="msg-message" class="form-control" placeholder="Message" v-model="message"></textarea>
      </div>
      <div class="form-result">
        <p class="alert alert-success" v-if="success && !error">Message sent successfully.</p>
        <p class="alert alert-error" v-if="!success && error">Message failed.</p>
      </div>
      <div class="form-group">
        <button class="btn rounded-xl" type="submit">Send</button>
      </div>
    </form>
  </v-col>
</template>

<script>
import { oContactDB } from "@/assets/firebase.js";
import firebase from "firebase/compat/app";

export default {
  name: "contact",
  firebase: { oContact: oContactDB },
  data: function () {
    return {
      oContact: [],
      name: "",
      email: "",
      subject: "",
      message: "",

      success: false,
      error: false,
    };
  },
  methods: {
    sendMail(e) {
      const oContact = firebase.database();
      const messagesRef = oContact.ref("contact");

      messagesRef
        .push({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        })
        .then(() => {
          this.success = true;
          console.log("Message sent successfully");

          this.name = this.email = this.subject = this.message = "";
          e.target.reset();
        })
        .catch((error) => {
          this.error = true;
          console.log("Error sending message:", error);
        });
    },
  },
};
</script>

<style scoped>
#contact {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contactForm {
  padding: 10px;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  width: 60%;
  display: flex;
  flex-direction: column;
  animation: bounceInLeft 10s;
}
@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(30px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
.form-row {
  display: flex;
  flex-wrap: wrap;
}

.form-row > div {
  width: 50%;
}
.form-group {
  padding: 10px;
}
.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 25px;
  box-sizing: border-box;
}
input[type="text"].form-control {
  margin: 8px 0;
  display: inline-block;
}
textarea.form-control {
  resize: none;
}
input:focus, textarea:focus {
  outline: none;
  border-color: #64B5F6;
  box-shadow: 0 0 10px #BBDEFB;
}
.btn {
  cursor: pointer;
  padding: 8px 10px;
  outline: none;
  border: 1px solid #64B5F6;
  background: #fff;
  color: #64B5F6;
  font-size: 16px;
  width: 30%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  background: #64B5F6;
  color: #fff;
}
.alert {
  padding: 0 10px;
}
.alert-success {
  color: #3be249;
}
.alert-error {
  color: #ff2121;
}
</style>
