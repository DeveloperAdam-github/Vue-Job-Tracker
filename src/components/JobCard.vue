<template>
  <div class="job" @dblclick="handleDelete">
    <div class="box">
      <p>Company:</p>
      <p>Role:</p>
      <p>Date:</p>
      <p>Responded:</p>
    </div>
    <div class="box2">
      <p>{{ job.company }}</p>
      <p>{{ job.role }}</p>
      <p>
        {{
          job.date
            .split('-')
            .reverse()
            .join('-')
        }}
      </p>

      <input
        type="checkbox"
        class="check"
        :checked="job.response === true"
        @click="handleSubmit"
      />
    </div>
    <span class="material-icons">delete</span>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';

export default {
  props: ['job'],
  setup(props) {
    const response = ref(props.job.response);

    const handleSubmit = async () => {
      const updateResponse = {
        response: !response.value,
      };
      const res = await projectFirestore
        .collection('posts')
        .doc(props.job.id)
        .update(updateResponse);
      res;

      location.reload();
    };

    const handleDelete = async () => {
      await projectFirestore
        .collection('posts')
        .doc(props.job.id)
        .delete();
      location.reload();
    };

    return { handleSubmit, response, handleDelete };
  },
};
</script>

<style scoped>
.job {
  height: 250px;
  width: 90%;
  max-width: 600px;
  background: whitesmoke;
  border-radius: 25px;
  padding: 2rem;
  margin: 3rem auto;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.8);
  display: flex;
}

@media screen and (max-width: 800px) {
  .job {
    width: 80%;
  }
  .job p {
    font-size: 0.8rem;
  }
}

.box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 600;
}

.box2 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.2rem;
}

input {
  height: 1.5rem;
  width: 1.4rem;
  margin: 0;
}

@media screen and (max-width: 800px) {
  input {
    height: 0.8rem;
    align-content: center;
    padding: 0;
    width: 0.8rem;
  }
}
</style>
