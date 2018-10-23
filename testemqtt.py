import paho.mqtt.client as mqtt, paho.mqtt.publish as publish

topico = 'b'

def on_connect(client, userdata, flags, rc):
    client.subscribe(topico)
    
def on_message(client, userdata, msg):
	if(msg == 'b\'a\''):
		print("abriu")
	elif(msg == 'b\'f\''):
		print(fechou)

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect('iot.eclipse.org', 1883, 60)
client.loop_forever()
