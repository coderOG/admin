<template>
    <div id="dragList" v-loading="loading">
 
        <div class="draglist-contianer">
            <div class="list-group">
                <div class="list-group-header success">已上架</div>
                <draggable v-model="defaultJson" group="music">
                    <div class="list-group-item" v-for="(item, index) in defaultJson" :key="item.id">
                        <span>{{index + 1}}</span>
                        {{item.name}}
                    </div>
                </draggable>
            </div>
            <div class="list-group">
                <div class="list-group-header info">待上架</div>
                <draggable v-model="newJson" group="music">
                    <div class="list-group-item" v-for="(item, index) in newJson" :key="item.id">
                        <span>{{index + 1}}</span>
                        {{item.name}}
                    </div>
                </draggable>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    name: 'dragList',
    components: { draggable },
    data() {
        return {
            defaultJson: [{id:'1340615',name:'甜腻腻的韩国小清新 우리만나요'},{id:'187867',name:'超燃！腿毛都竖起来了 The Phoenix'},{id:'79715',name:'天空之城 卡农合奏'},{id:'413454',name:'欧美男子独立乐团Rixton Make Out'},{id:'1299978',name:'「3D」活力的电气蹲妹 Super Natural'}],
            newJson: [{id:'563023',name:'懒汉之歌 The lazy song 女声翻唱'},{id:'1311397',name:'一场未完成的冒险 Three Of Us'},{id:'1326292',name:'节奏男声 风骚又深情 Rain'},{id:'1326245',name:'温柔宠溺的清澈男声「夕溜まりのしおり」'},{id:'1352360',name:'Nevada (Original Mix)'}],
            loading: false
        }
    }
}
</script>
<style lang='scss'>
#dragList {
    .draglist-contianer {
        display: flex;
        .list-group {
            width: 30%;
            display: flex;
            flex-direction: column;
            margin-right: 50px;
            .list-group-header {
                color: #fff;
                font-weight: bold;
                text-align: center;
                padding: 12px 20px;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.125);
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                border-bottom: 0;
                &.success {
                    color: #42b983;
                }
                &.info {
                    color: #E6A23C;
                }
            }
            .list-group-item {
                position: relative;
                cursor: move;
                padding: 12px 20px;
                margin-bottom: -1px;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.125);
                span {
                    margin-right: 10px;
                }
                &:last-child {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
            }
        }
    }
}
</style>
