class PubSubUtils {
    constructor(props){
        if(this.instance){
            return this.instance;
        }

        this.topics = {};
        this.uid = 0;
        this.instance = this;
    }

    subscribe (topic, func) {
       let token = '';
       if(!this.topics[topic]){
           token = (++this.uid).toString();
           this.topics[topic] = {};
           this.topics[topic] = {
               token: token,
               func: []
           }
       }
       this.topics[topic]['func'].push(func);
       return token;
    }

    unsubscribe (topic = '') {
        if(!topic){
            return;
        }
        delete this.topics[topic];
    }


    publish(topic, args) {
        let _this = this;
        if(!_this.topics[topic]){
            return false;
        }
        if(_this.topics[topic]) {
            let subscribers = _this.topics[topic]['func'];
            subscribers.forEach(function (item) {
                try{
                  item(topic, args);
                }catch(e){
                    console.log('error', e)
                }
            })
        }
        return true;
    }
}

export default new PubSubUtils()