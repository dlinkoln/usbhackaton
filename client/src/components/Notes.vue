<template>
  <div class="notes-container">
    <b-container>
      <b-card-group deck>
        <b-card
          bg-variant="primary"
          text-variant="white"
          header="Public Note"
          class="text-center"
          v-for="note in publicNotes"
          :key="note.id"
        >
          <b-card-text>
            {{ note.note }}
          </b-card-text>
        </b-card>
      </b-card-group>

      <hr />
    </b-container>
  </div>
</template>
<script>
import { getPublicNotes } from "../utils/notes-service";
export default {
  name: "publicNotes",
  components: {},
  data() {
    return {
      publicNotes: "",
      isLoading: false,
    };
  },
  methods: {
    getPublicNotes() {
      getPublicNotes().then((notes) => {
        this.publicNotes = notes;
      });
    },
  },

  mounted() {
    this.getPublicNotes();
  },
};
</script>
<style scoped>
.notes-container {
  padding: 1rem;
}
</style>
