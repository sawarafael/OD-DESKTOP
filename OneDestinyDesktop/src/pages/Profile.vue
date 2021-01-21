<template>
  <q-page padding class="profile-page q-px-md q-mx-md">
    <div class="col">
      <q-card class="my-card">
        <q-card-section>
          <div>
            <q-img
              v-bind:src="userDatum[0].coverPage"
              class="cover-image"
              native-context-menu
            >
              <div class="absolute-bottom-left">
                <q-btn round class="q-pa-lg q-mt-lg">
                  <q-avatar size="8em">
                    <img
                      v-bind:src="userDatum[0].avatar"
                      alt="Seu avatar"
                      class="user-avatar"
                    />
                  </q-avatar>
                </q-btn>
              </div>
            </q-img>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="text-center">
            <div class="text-h6">{{ userDatum[0].nickname }}</div>
            <div class="text-h6 text-weight-light">
              {{ userID[0] }}
            </div>
            <div class="text-subtitle2 text-weight-thin">
              {{ userDatum[0].level }}
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="text-center">
            <div class="text-h6">Bio</div>
            <div class="text-body1"></div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="text-center">
            <div class="text-h6">Amigos</div>
          </div>
          <div
            class="col"
            v-for="userFriend in allUserFriends"
            :key="userFriend.id"
          >
            <div>
              <div>
                <q-avatar size="120px">
                  <img v-bind:src="userFriend.userdatum.avatar" alt="" />
                </q-avatar>
                <br />
                <q-chip>{{ userFriend.id }}</q-chip>
                <q-chip>Level {{ userFriend.userdatum.level }}</q-chip>
                <p>
                  {{ userFriend.username }} - (
                  {{ userFriend.userdatum.nickname }} )
                </p>
              </div>
            </div>
          </div>

          <div class="text-center">
            <div class="text-h6">Melhores Amigos</div>
          </div>
          <div
            class="col"
            v-for="userBestFriend in allUserBestFriends"
            :key="userBestFriend.id"
          >
            <div>
              <div>
                <q-avatar size="120px">
                  <img v-bind:src="userBestFriend.userdatum.avatar" alt="" />
                </q-avatar>
                <br />
                <q-chip>{{ userBestFriend.id }}</q-chip>
                <q-chip>Level {{ userBestFriend.userdatum.level }}</q-chip>
                <p>
                  {{ userBestFriend.username }} - (
                  {{ userBestFriend.userdatum.nickname }} )
                </p>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat @click="fixed = true" label="Editar perfil" />
          <q-dialog v-model="fixed">
            <user-form />
          </q-dialog>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserForm from "../components/UserForm.vue";
export default {
  components: { UserForm },
  name: "Profile",

  methods: {
    ...mapActions(["fetchUser", "seeFriendData"])
  },

  computed: mapGetters([
    "userID",
    "userName",
    "userDatum",
    "allUserFriends",
    "allUserBestFriends"
  ]),
  created() {
    this.seeFriendData();
    this.fetchUser();
  },
  data() {
    return {
      fixed: false
    };
  }
};
</script>

<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 100%
    border-radius: 10px
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px


.cover-image
    border-radius: 10px
</style>
