<script lang="ts" src="./NavigationBar"></script>

<template>
  <nav class="navbar">
    <div class="title inline-block">
      <span><img class="logo" src="../../assets/logo.png" /></span>
      <span class="wired-font">WIRED</span>
    </div>
    <div class="right-sec">
      <button class="edit-name" @click="editNameDialog = true">
        <v-icon class="white" icon="mdi-account-circle"></v-icon>
        <v-dialog v-model="editNameDialog" width="auto" center>
          <div class="edit-name-overlay">
            <div class="edit-name-title">
              <div class="title">
                <v-icon icon="mdi-account-circle" size="small"></v-icon>
                <div class="account-info">Account Information</div>
              </div>
              <div>
                <v-icon
                  icon="mdi-close"
                  size="small"
                  @click="editNameDialog = false"
                ></v-icon>
              </div>
            </div>
            <div class="edit-name-form">
              <div class="first input">
                <div>
                  <v-text-field
                    model-value="John"
                    label="Fist Name"
                    variant="outlined"
                    readonly
                    class="text-field"
                  ></v-text-field>
                </div>
                <div>
                  <button class="edit-button">EDIT</button>
                </div>
              </div>
              <div class="second input">
                <div>
                  <v-text-field
                    model-value="Doe"
                    label="Last Name"
                    variant="outlined"
                    readonly
                    class="text-field"
                  ></v-text-field>
                </div>
                <div>
                  <button class="edit-button">EDIT</button>
                </div>
              </div>
              <div class="save-reset-buttons">
                <button class="save button">
                  <v-icon icon="mdi-content-save-edit"></v-icon>SAVE
                </button>
                <button class="reset button">
                  <v-icon icon="mdi-restore"></v-icon>RESET
                </button>
              </div>
            </div>
          </div>
        </v-dialog>
      </button>
      <div class="white profile-name">Jawad Wehbi</div>
      <div class="white">
        <button class="sign-out">
          <v-icon class="sign-out-icon" icon="mdi-logout"></v-icon>
          SIGNOUT
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" src="./NavigationBar.scss"></style>
