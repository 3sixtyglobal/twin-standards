# Variable: ActivityStreamsTypes

> `const` **ActivityStreamsTypes**: `object`

The types concerning Activity Streams.
Section 3.1 Activity Types: https://www.w3.org/TR/activitystreams-vocabulary/#activity-types

## Type Declaration

### Activity

> `readonly` **Activity**: `"Activity"` = `"Activity"`

Activity.

Generic base type for activities (actions) in Activity Streams.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity

### Accept

> `readonly` **Accept**: `"Accept"` = `"Accept"`

Accept.

Indicates that the actor accepts the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accept

### Add

> `readonly` **Add**: `"Add"` = `"Add"`

Add.

Indicates that the actor added the object to the target.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-add

### Announce

> `readonly` **Announce**: `"Announce"` = `"Announce"`

Announce.

Indicates that the actor is calling attention to the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-announce

### Arrive

> `readonly` **Arrive**: `"Arrive"` = `"Arrive"`

Arrive.

Intransitive activity indicating that the actor arrived at a location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-arrive

### Block

> `readonly` **Block**: `"Block"` = `"Block"`

Block.

Indicates that the actor is blocking the object (a stronger form of Ignore).

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block

### Create

> `readonly` **Create**: `"Create"` = `"Create"`

Create.

Indicates that the actor has created the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create

### Delete

> `readonly` **Delete**: `"Delete"` = `"Delete"`

Delete.

Indicates that the actor has deleted the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-delete

### Dislike

> `readonly` **Dislike**: `"Dislike"` = `"Dislike"`

Dislike.

Indicates that the actor dislikes the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike

### Flag

> `readonly` **Flag**: `"Flag"` = `"Flag"`

Flag.

Indicates that the actor is flagging the object (e.g., reporting it).

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-flag

### Follow

> `readonly` **Follow**: `"Follow"` = `"Follow"`

Follow.

Indicates that the actor is following the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow

### Ignore

> `readonly` **Ignore**: `"Ignore"` = `"Ignore"`

Ignore.

Indicates that the actor is ignoring the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore

### Invite

> `readonly` **Invite**: `"Invite"` = `"Invite"`

Invite.

Specialization of Offer in which the actor is extending an invitation.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-invite

### Join

> `readonly` **Join**: `"Join"` = `"Join"`

Join.

Indicates that the actor has joined the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-join

### Leave

> `readonly` **Leave**: `"Leave"` = `"Leave"`

Leave.

Indicates that the actor has left the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-leave

### Like

> `readonly` **Like**: `"Like"` = `"Like"`

Like.

Indicates that the actor likes, recommends, or endorses the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like

### Listen

> `readonly` **Listen**: `"Listen"` = `"Listen"`

Listen.

Indicates that the actor has listened to the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-listen

### Move

> `readonly` **Move**: `"Move"` = `"Move"`

Move.

Indicates that the actor has moved the object from `origin` to `target`.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-move

### Offer

> `readonly` **Offer**: `"Offer"` = `"Offer"`

Offer.

Indicates that the actor is offering the object (optionally to a target).

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-offer

### Question

> `readonly` **Question**: `"Question"` = `"Question"`

Question.

Intransitive activity representing a question; can express options via `oneOf`/`anyOf`.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question

### Reject

> `readonly` **Reject**: `"Reject"` = `"Reject"`

Reject.

Indicates that the actor is rejecting the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-reject

### Read

> `readonly` **Read**: `"Read"` = `"Read"`

Read.

Indicates that the actor has read the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-read

### Remove

> `readonly` **Remove**: `"Remove"` = `"Remove"`

Remove.

Indicates that the actor is removing the object (optionally from an origin context).

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-remove

### TentativeReject

> `readonly` **TentativeReject**: `"TentativeReject"` = `"TentativeReject"`

TentativeReject.

Specialization of Reject indicating that the rejection is tentative.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativereject

### TentativeAccept

> `readonly` **TentativeAccept**: `"TentativeAccept"` = `"TentativeAccept"`

TentativeAccept.

Specialization of Accept indicating that the acceptance is tentative.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativeaccept

### Travel

> `readonly` **Travel**: `"Travel"` = `"Travel"`

Travel.

Intransitive activity indicating that the actor is travelling to `target` from `origin`.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-travel

### Undo

> `readonly` **Undo**: `"Undo"` = `"Undo"`

Undo.

Indicates that the actor is undoing a previous activity.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo

### Update

> `readonly` **Update**: `"Update"` = `"Update"`

Update.

Indicates that the actor has updated the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-update

### View

> `readonly` **View**: `"View"` = `"View"`

View.

Indicates that the actor has viewed the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-view
