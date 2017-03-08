<template>
<div>
    <div id='app'>
        count is {{ count }}
        <button @click='increment'>+1</button>
        <button @click='decrement'>-1</button><br/>
        {{ msg }}
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: mapGetters ([
        'count','msg'
    ]),
    methods: mapActions ([
        'increment','decrement'
    ])
}
</script>