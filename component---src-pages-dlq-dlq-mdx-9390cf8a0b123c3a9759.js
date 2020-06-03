(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{NqVV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In distributed systems, it is common to find mechanisms for retrying calls to other, potentially external, services and fail gracefully if that service is unavailable for any reason. Here we are going to talk about using non-blocking request reprocessing and dead letter queues (DLQ) to achieve decoupled, observable error-handling without disrupting real-time traffic in the context of the ",Object(a.b)("a",o({parentName:"p"},{href:"../containerAnomaly/containerAnomaly/"}),"Container Anomaly Use Case")," of our Reefer Container Reference Application."),Object(a.b)("p",null,"A brief description about the problem and how non-blocking reprocessing and dead letter queues can help us can be found ",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/design-patterns/ED-patterns/#event-reprocessing-with-dead-letter-pattern"}),"here"),"."),Object(a.b)("h2",null,"Implementation"),Object(a.b)("p",null,"As explained in the ",Object(a.b)("a",o({parentName:"p"},{href:"../containerAnomaly/containerAnomaly/"}),"Container Anomaly Use Case")," of our Reefer Container Reference Application, the Spring Containers component calls a BPM process in order to get a field engineer assigned to checking and fixing a potentially bad container based on the telemetry events being sent by it."),Object(a.b)("p",null,"As said in the introduction above, this call to the BPM process might fail so we need to implement a mechanism whereby we use non-blocking request reprocessing and dead letter queues (DLQ) to achieve decoupled, observable error-handling without disrupting real-time traffic."),Object(a.b)("p",null,"We have done so by creating two new topics the Spring Container component will subscribe and publish to: ",Object(a.b)("strong",{parentName:"p"},"container-anomaly-retry")," and ",Object(a.b)("strong",{parentName:"p"},"container-anomaly-dead"),"."),Object(a.b)("p",null,"When the Spring Container receives a ",Object(a.b)("strong",{parentName:"p"},"ContainerAnomaly")," event (actually three of these to decrease the load on the BPM side), it will call the BPM service. This call is divided into two actions:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Authenticate")," against BPM which will give you a token to"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Call the BPM process")," that will trigger the field engineer assignment process.")),Object(a.b)("p",null,"Another important thing to have in mind when implementing retry and graceful failure mechanisms is that it only makes sense to retry a call to a, potentially external, service when this service is temporarily unavailable (because it is temporarily overloaded, temporarily down, etc) and not when the call failed (due to bad data sent, bad url used, etc). This way we avoid extra load in the dependent service by not retrying calls we know that will fail again anyway beforehand."),Object(a.b)("p",null,"To illustrate this, we have decided that any failure in authenticating with BPM is an error and that it does not make sense to retry since it will fail again due to bad Spring Container component configuration (wrong BPM credentials provided)."),Object(a.b)("h3",null,"Service Unavailable"),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAB3UlEQVQoz11RyW7bMBT057c/kKKn9hK0QO5tDzk1QLfAtePYlmRbkmUtFMVFNEWJ2tVHu0CAEIMHEuS8NzOclWXpWNbR89zDIY5j13V937dtG2OcXVYURZQQTglUxmk/9OM4Dl0LZaY5te4+WJ/e480iQinJsNaaMs55nmJcKlVonW2XT+/eug/fvu5u77275Onn8uYNXv6eQQ8Zh8T3JedMKCGrs9QGhQEXBc2loBxtNxUniQwAWjDqrGvBZtM0tf20R411UgmtiWhjosOsCnGFWL10su/zAPEGiX6cpnE0gDWYMs2uh7nD7h9TN1ZffiEnkPTcZHlNcqgNzlt2bjDTUjVC1kXZqqqrqs6Qp0u/3vSdqGg2njiiEsMoWoOEhFQAzOsgrR5X/sbnMe8SokEUsK7ksTMRTnlhNO9DudjGKxsdwgK0eLEKULkPzluPOavAtaNTBo40EP6Tr5N50cJYPykfFujPljhRuT5wKyicU2F7ObQIdul8fvy742BnGF6RZZtQk1ZMay8U62dvHzAjnuoTBgs6Fd18L388UwjlNTmXLZiBpxBvHOWHj5+TE0uxynCRpAqmAR+ChGjgX14898N4+bNRVb1UnSwvMPtWXuI9q+7lCtKue3j/D2bvYYoPp+UVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"retry",title:"retry",src:"/refarch-kc/static/0443d91a3f0a1da49c49ae2a573a1ec3/2faef/Slide1.png",srcSet:["/refarch-kc/static/0443d91a3f0a1da49c49ae2a573a1ec3/7fc1e/Slide1.png 288w","/refarch-kc/static/0443d91a3f0a1da49c49ae2a573a1ec3/a5df1/Slide1.png 576w","/refarch-kc/static/0443d91a3f0a1da49c49ae2a573a1ec3/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"As said above, there might be some times when the service we depend on and call (BPM in our case) is temporarily not available. Either because it is temporarily down or overloaded. If this happens, the Spring Container component will send the ",Object(a.b)("strong",{parentName:"p"},"ContainerAnomaly")," event into the ",Object(a.b)("strong",{parentName:"p"},"container-anomaly-retry")," topic."),Object(a.b)("p",null,"The Spring Container component will also subscribe to that topic and will retry the call to BPM for each ",Object(a.b)("strong",{parentName:"p"},"ContainerAnomalyRetry")," event it reads from the ",Object(a.b)("strong",{parentName:"p"},"container-anomaly-retry")," topic. However, it will only make the call to BPM after certain delay, so that we don’t collapse the service with retries, which will increase based on the retry attempt number:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),'@Override\npublic void onMessage(ConsumerRecord<Integer, String> message) {\n    if (message.value().contains(ContainerEvent.CONTAINER_ANOMALY_RETRY)) {\n        // --------------------------------------------\n        // ContainerAnomalyEventRetry events\n        //---------------------------------------------\n        LOG.info("Received new ContainerAnomalyEventRetry event: " + message.value());\n        // Get the ContainerAnomalyRetryEvent objet from the event received\n        ContainerAnomalyEventRetry caer = parser.fromJson(message.value(), ContainerAnomalyEventRetry.class);\n        int time_to_wait = caer.getRetries() * 10;\n        LOG.info("This is a BPM call retry. Applying a delay of " + time_to_wait + " seconds");\n        try {\n            Thread.sleep(time_to_wait * 1000);\n        } catch (InterruptedException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n        bpmAgent.callBPM(caer,false);\n    }\n}\n')),Object(a.b)("p",null,"The ContainerAnomalyEventRetry events sent to the container-anomaly-retry topic look like this:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "containerID": "1111",\n  "payload": {\n    "ambiant_temperature": 19.8447,\n    "carbon_dioxide_level": 4.42579,\n    "content_type": 2,\n    "defrost_cycle": 6,\n    "humidity_level": 60.3148,\n    "kilowatts": 3.44686,\n    "latitude": 31.4,\n    "longitude": 121.5,\n    "nitrogen_level": 79.4046,\n    "oxygen_level": 20.4543,\n    "target_temperature": 6,\n    "temperature": 5.49647,\n    "time_door_open": 0.822024,\n    "vent_1": true,\n    "vent_2": true,\n    "vent_3": true\n  },\n  "retries": 1,\n  "timestamp": 1583752031,\n  "type": "ContainerAnomalyRetry"\n}\n')),Object(a.b)("p",null,"where you can see a new attribute called ",Object(a.b)("strong",{parentName:"p"},"retries")," so that we keep the count of how many times we have called the BPM service. If the BPM service is still unreachable/unavailable after three attempts, the Spring Container component will eventually send a ",Object(a.b)("strong",{parentName:"p"},"ContainerAnomalyDead")," event into the ",Object(a.b)("strong",{parentName:"p"},"container-anomaly-dead")," topic, which should be somehow monitored to take the appropriate action based on the type of events that get published:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),'private void toRetryTopic(ContainerAnomalyEvent cae){\n    ContainerAnomalyEventRetry caer;\n\n    // Add one retry to ContainerAnomalyEventRetry or create a new one\n    if (cae instanceof ContainerAnomalyEventRetry){\n        caer = (ContainerAnomalyEventRetry)cae;\n        caer.setRetries(caer.getRetries()+1);\n    }\n    else caer = new ContainerAnomalyEventRetry(cae,1);\n\n    if (caer.getRetries() > 3){\n        // send the event to the container anomaly dead queue\n        toDeadTopic(cae,"No more BPM process retries left");\n    }\n    else {\n        // Send the event to the container anomaly retry queue\n        LOG.info("Sending ContainerAnomalyEventRetry event for containerID: " + cae.getContainerID() + " to the container anomaly retry topic");\n        containerAnomalyRetryProducer.emit(caer);\n    }\n}\n')),Object(a.b)("p",null,"and the ContainerAnomalyDead event looks like:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "containerID": "1111",\n  "payload": {\n    "ambiant_temperature": 19.8447,\n    "carbon_dioxide_level": 4.42579,\n    "content_type": 2,\n    "defrost_cycle": 6,\n    "humidity_level": 60.3148,\n    "kilowatts": 3.44686,\n    "latitude": 31.4,\n    "longitude": 121.5,\n    "nitrogen_level": 79.4046,\n    "oxygen_level": 20.4543,\n    "target_temperature": 6,\n    "temperature": 5.49647,\n    "time_door_open": 0.822024,\n    "vent_1": true,\n    "vent_2": true,\n    "vent_3": true\n  },\n  "reason": "No more BPM process retries left",\n  "timestamp": 1583752031,\n  "type": "ContainerAnomalyDead"\n}\n')),Object(a.b)("p",null,"where you can see we have added the ",Object(a.b)("strong",{parentName:"p"},"reason")," so that if any operator or automated system monitors this queue, they know what might be the problem."),Object(a.b)("h3",null,"Errors"),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABxklEQVQoz1VQy46UQBTtz9cfmMSVG5NZuHA3zsKF0ZjRmFE0TgNjA9K86k0BBcWjoLzQ05P0zQl1K5xzb52za9vWd91/YRgcDlmWBUEQRZHneRhjslWapoxSTgnnjAvGGG2VWsy0zPNOC+a+fe1ev8IPP9MCUYK11sASokQYA6/Rmuwd5+pl8Pn2xn9z+3id/vjy6+oFdr7t5mmss4RGUS0El0rWnax1BWhWCNmwspZMFPuHTpC8josm0ZIz708v+c5aOxr7txjco8pZT+WYUZ2QLsFdwXvHx5/u41wMhTQLUGdr12M9oXbLdrn3+Yfv6JCpm7vCixtej6QcqNBEjlgMXA6Ia3iUaCc1Wt3PqptgzLoZ9GZeZ9Cy30fVEbVY9Bltk2pKSYv4+pwUqzCT8e8gcvzHhCeoAcFJvEwGPlY2I5NDwXQhhmPC9+/exzFFTGPW5QjM9zREiReHeZkRBfwnsdkc8WrImQbPYB7Yx49fi7zKsUJEpbhFok/FiCpDIALWg+pC3PUGlot6AJTNWBormgmaqp0ghUqtv8p6AA701l5uPhX4n5cNZp6h3+I4EaBftoRPGZ3F86X4DHMWT2Z5nvs86z+VIWnTOEjZ1wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"error",title:"error",src:"/refarch-kc/static/2e19921d417d31e38776d118c3383ed2/2faef/Slide2.png",srcSet:["/refarch-kc/static/2e19921d417d31e38776d118c3383ed2/7fc1e/Slide2.png 288w","/refarch-kc/static/2e19921d417d31e38776d118c3383ed2/a5df1/Slide2.png 576w","/refarch-kc/static/2e19921d417d31e38776d118c3383ed2/2faef/Slide2.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"As said earlier, when implementing request retry and graceful failure mechanisms for a, potentially external, service, we want to retry only when the service is unreachable/unavailable and not when there is an error in the data we are calling the service with, an error with the service url or something on those lines so that we don’t keep retrying calls we know they are bound to fail beforehand."),Object(a.b)("p",null,"As a result, when this happens, we simply send the the event to the dead letter queue with a meaningful error message/code so that monitoring systems (either automated ones or operators monitoring these queues) can act accordingly."),Object(a.b)("p",null,"In our case, we are considering an error any failed attempt to get authenticated against BPM, either due to bad credentials or login url, and consider that retrying those requests will only put more load onto the system. As a result, we simply send a ",Object(a.b)("strong",{parentName:"p"},"ContainerAnomalyDead")," event into the ",Object(a.b)("strong",{parentName:"p"},"container-anomaly-dead")," topic instead of retrying."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),'// Manage BPM token\nif (bpm_token == "" || expired) {\n    // Logging\n    if (bpm_token == "") LOG.info("No BPM token - Calling the BPM authentication service");\n    if (expired) LOG.info("BPM token expired - Calling the BPM authentication service");\n    // Get the BPM token\n    try {\n        bpm_token = getBPMToken();\n    } catch (Exception ex) {\n        /*\n        * DEAD\n        * We Consider not being able to authenticate with BPM a severe problem as it does not\n        * make sense to retry calling a service which we can\'t authenticate against.\n        */\n        toDeadTopic(ContainerAnomalyEvent, ex.getMessage());\n    }\n}\n')),Object(a.b)("p",null,"In this case, the ContainerAnomalyDead event looks exactly the same as in the service unavailable section but with a different reason, potentially indicating another problem this time."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "containerID": "1111",\n  "payload": {\n    "ambiant_temperature": 19.8447,\n    "carbon_dioxide_level": 4.42579,\n    "content_type": 2,\n    "defrost_cycle": 6,\n    "humidity_level": 60.3148,\n    "kilowatts": 3.44686,\n    "latitude": 31.4,\n    "longitude": 121.5,\n    "nitrogen_level": 79.4046,\n    "oxygen_level": 20.4543,\n    "target_temperature": 6,\n    "temperature": 5.49647,\n    "time_door_open": 0.822024,\n    "vent_1": true,\n    "vent_2": true,\n    "vent_3": true\n  },\n  "reason": "BPM authentication exception",\n  "timestamp": 1583751647,\n  "type": "ContainerAnomalyDead"\n}\n')),Object(a.b)("h3",null,"What to do next"),Object(a.b)("p",null,"As already said, the idea of implementing the Request Retry and Dead Letter Queue Pattern is not only to alleviate the load an, external or not, system we depend on might have but also as a sink for potential problems. Whether ContainerAnomaly messages end up in the container-anomaly-dead topic because the BPM service was (temporarily or not) unavailable or there was an, expected or not, error in the system, this dead letter queue will ideally have some automated/manual monitoring system/person so that the appropriate action can be taken as a result in an attempt to minimize the incorrect functioning of your system/service. This is, for instance, one good reason to wrap up your messages being sent to the dead letter queue with some code/reason that can be quickly understood by whatever monitor system. Not only understood but possibly aggregated and queried to better understand your system performance over time."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-dlq-dlq-mdx-9390cf8a0b123c3a9759.js.map