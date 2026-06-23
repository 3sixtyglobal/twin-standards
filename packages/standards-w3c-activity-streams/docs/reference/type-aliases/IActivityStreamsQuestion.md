# Type Alias: IActivityStreamsQuestion

> **IActivityStreamsQuestion** = [`IActivityStreamsQuestionBase`](../interfaces/IActivityStreamsQuestionBase.md) & [`IActivityStreamsQuestionAnyOfChoice`](../interfaces/IActivityStreamsQuestionAnyOfChoice.md) \| [`IActivityStreamsQuestionOneOfChoice`](../interfaces/IActivityStreamsQuestionOneOfChoice.md) \| [`IActivityStreamsQuestionNeitherChoice`](../interfaces/IActivityStreamsQuestionNeitherChoice.md)

A W3C Activity Streams Question.

A `Question` represents a question being asked. Use `oneOf` for exclusive
choices, `anyOf` for inclusive choices, and `closed` to indicate when the question
is closed.

## See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
