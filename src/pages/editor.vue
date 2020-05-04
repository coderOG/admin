<template>
	<div style="width: 1200px;margin: 0 auto;">
		<tinymce-text id="tinymce" @release="release"></tinymce-text>
	</div>
	
</template>
<script>
import TinymceText from '@/components/Tinymce'
 
export default {
	name:'',
	data () {
		return {
			
		};
	},
	methods:{
		release(content){
			console.log(content);
		}
	},
	components:{
		'tinymce-text':TinymceText
	}
}

</script>
