# PowerAppTeamsCollab
This app demonstrates the current feature set for PowerApps and Teams Collaboration.  

This apps runs in both Teams embedded and standalone. 

This uses the Teams Connector and Teams Context Integration variables. Today, the Teams Connector is an API connector that  lets you:

- Post messages to a channel (not a chat) 
- Get the recent messages from a channel. 

The 'sources' are from running Daryl's tool (https://github.com/daryllabar/CanvasAppPackager)  on the msapp. 

Here are some expressions: 

 
[Getting Channel Name from Id](src/Code/ScreenShowTeamsContent/LabelEmbeddedChannelName/LabelEmbeddedChannelName.js#L6)
```
	First(Filter(MicrosoftTeams.GetChannelsForGroup(_groupId).value, id = _channelId)).displayName
```

[Post message to chat](src/Code/ScreenPostToTeamsChat/Button4/Button4.js#L142)
```
	MicrosoftTeams.PostMessageToChannelV3(LabelTeamId.Text, LabelChannelId.Text, { content : TextInputMessage.Text, contentType : "text"} )
```

[List Teams Context Vars](src/Code/ScreenShowTeamsContent/Gallery3/Gallery3.js#L2)
