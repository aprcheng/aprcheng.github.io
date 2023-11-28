import UrlTool from "@/views/UrlTool.vue";
import TimestampTool from "@/views/TimestampTool.vue";

const routes = [
    {path: '/', component: TimestampTool, name: 'timestampTool'},
    {path: '/url', component: UrlTool, name: 'urlTool'}
]

export default routes;