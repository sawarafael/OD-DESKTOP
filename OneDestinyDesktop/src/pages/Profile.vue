<template>
    <div>
    <div class="q-ml-xl q-mr-xl">
        <q-img src="https://giffiles.alphacoders.com/121/121556.gif" height="590px"/>
            <q-avatar class="col absolute-center" size="250px">
                <img src="https://i.imgur.com/MryWPyT.gif" alt="">
            </q-avatar>
    </div>

    <div class="q-mt-xl col-12 text-h1">
        <div class="q-mt-xl">
            Username
        </div>
        <div class="text-h3">
            Role
        </div>
        <div class="q-mt-xl row text-h5">
            <div class="col">
                <div>
                    Sobre mim:
                    <p>
                        Biografia
                    </p>
                </div>
                <div>
                    Level
                    <div>
                        Tofreús, Insígnias e Medalhas
                    </div>
                </div>
            </div>
            <div class="col">
                <div>
                    <input type="text" aria-label="postagem">
                    <br>
                    <q-btn color="primary" label="Postar!" />
                </div>
                <div>
                    Posts:
                    <div>
                        <p>Id do Post</p>
                        <p>Conteúdo do Post</p>
                        <q-chip>Data do Post</q-chip>
                    </div>
                </div>
            </div>
            <div class="col">
                <div>
                    Amigos:
                    <div>
                        <q-avatar size="120px">
                            <img src="https://s4.anilist.co/file/anilistcdn/character/large/b76026-AfknPHzLCvG9.png" alt="">
                        </q-avatar>
                        <p>ID do Amigo</p>
                        <p>Nome do Amigo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
