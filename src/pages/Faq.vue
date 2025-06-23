<template>
    <div class="position-relative btn-right d-flex align-center px-1 cursor-pointer">
        <v-icon class="btn-right-icon" icon="mdi-arrow-right-thin"></v-icon>
        <div class="overlay"></div>
    </div>
</template>

<style lang="css" scoped>
.btn-right-icon {
    position: relative;
    z-index: 2;
}

.overlay {
    position: absolute;
    background-color: #ccc;
    left: 0;
    width: 40%;
    height: 50%;
    z-index: 1;
    transition: all 0.3s ease-in-out;
}

.btn-right:hover .overlay {
    height: 100%;
    width: 100%;
}
</style>
