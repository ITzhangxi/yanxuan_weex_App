export default {
    methods: {
        //    weex 适配iphone X
        isipx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        }
    },
    created() {
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace',{
            fontFamily:'iconfont',
            src:"url('src/assets/font/iconfont.ttf')"
        })
    },
}