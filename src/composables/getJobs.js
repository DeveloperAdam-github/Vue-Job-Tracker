import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getJobs = () => {
  const jobs = ref([]);
  const error = ref(null);

  const getData = async () => {
    try {
      const response = await projectFirestore
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .get();

      jobs.value = response.docs.map((doc) => {
        // console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };
  return { jobs, error, getData };
};

export default getJobs;

// const getJobs = () => {
//   const jobs = ref([]);
//   const error = ref(null);

//   const getData = async () => {
//     try {
//       const response = await projectFirestore
//         .collection('posts')
//         .orderBy('createdAt', 'desc')
//         .get();

//       jobs.value = response.docs.map((doc) => {
//         // console.log(doc.data());
//         return { ...doc.data(), id: doc.id };
//       });
//     } catch (err) {
//       error.value = err.message;
//     }
//   };
//   return { jobs, error, getData };
// };

// export default getJobs;
