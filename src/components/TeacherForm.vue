<script setup>
import { ref } from "vue";
let teacher = ref({
  teacherName: "",
  surname: "",
  dni: "",
  subjects: [],
  doc: false,
});
let teachers = ref([]);
let subject = ref("");
const handleSubject = () => {
  teacher.value.subjects.push(subject.value);
  subject.value = "";
};
const handleAddTeacher = () => {
  teachers.value.push({
    teacherName: teacher.value.teacherName,
    surname: teacher.value.surname,
    dni: teacher.value.dni,
    subjects: teacher.value.subjects,
    doc: teacher.value.doc,
  });
  teacher.value.teacherName = "";
  teacher.value.surname = "";
  teacher.value.dni = "";
  teacher.value.subjects = [];
  teacher.value.doc = "";
};
</script>
<template>
  <section>
    <h3>Añadir profesor</h3>
    <div>
      <div>
        <label for="">Nombres: </label
        ><input type="text" v-model="teacher.teacherName" />
      </div>
      <div>
        <label for="">Apellidos: </label
        ><input type="text" v-model="teacher.surname" />
      </div>
      <div>
        <label for="">DNI / NIF:</label
        ><input type="text" v-model="teacher.dni" />
      </div>
      <div>
        <label for="">Materias: </label><input type="text" v-model="subject" />
        <button @click="handleSubject()">Agegar</button>
      </div>
      <div>
        <ul>
          <li v-for="(elm, index) in teacher.subjects" :key="index">
            {{ elm }}
          </li>
        </ul>
      </div>
      <input type="checkbox" v-model="teacher.doc" />Documentación entregada
      <button @click="handleAddTeacher()">Agegar</button>
    </div>
  </section>

  <section>
    <h3>Listado de profesor</h3>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>DNI / NIF</th>
        <th>Materias</th>
        <th>Documentación entregada</th>
      </tr>
      <tr v-for="(elm, index) in teachers" :key="index">
        <th>{{ elm.teacherName }}</th>
        <th>{{ elm.surname }}</th>
        <th>{{ elm.dni }}</th>
        <th>
          <ul>
            <li v-for="(item, index) in elm.subjects" :key="index">
              {{ item }}
            </li>
          </ul>
        </th>
        <th v-if="elm.doc">Entregada</th>
        <th v-else>No Entregada</th>
      </tr>
    </table>
  </section>
</template>

<style scoped></style>
