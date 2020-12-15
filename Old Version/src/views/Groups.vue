<template>

    <div>
    <div>
        <div class="text-h3">
            Grupos de Conversa de {{ username }}
        </div>
        <div class="row">
           <!--CARDS DE GRUPOS-->
        </div>
    </div>
        <div class="text-h3">
            Atividades dos Amigos
        </div>
        <div class="row">
            <!--Lista de Atividades-->
        </div>  
    </div>


</template>

<script>
export default {
    data () {
        return {
            username: localStorage.getItem("usern")
        }
    }

}
</script>