<template>
  <div 
  class="entry-container mb-3 pointer p-2"
  @click="$router.push({name: 'entry', params:{id:10}})"
  >
    <!-- Titke -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">18</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2023, Sabado</span>

    </div>

    <div class="entry-description">

        Reprehenderit eiusmod nisi excepteur cupidatat nostrud est magna proident commodo in voluptate. Dolor ex eiusmod fugiat et laboris labore ullamco in velit exercitation cillum commodo. Ex velit eu ea quis incididunt. Nulla cupidatat enim do tempor culpa ea sunt non. Nulla exercitation sunt fugiat nostrud eiusmod enim reprehenderit sunt deserunt tempor do. Lorem eu aliquip labore incididunt velit amet culpa do aliquip ad nostrud aliquip cillum ipsum.

    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;


    }
}
.entry-description{
    font-size: 12px;
}
</style>