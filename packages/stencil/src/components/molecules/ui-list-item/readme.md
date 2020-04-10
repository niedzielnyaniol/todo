# ui-list-item



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default     |
| -------- | --------- | ----------- | --------- | ----------- |
| `done`   | `done`    |             | `boolean` | `undefined` |
| `last`   | `last`    |             | `boolean` | `false`     |
| `name`   | `name`    |             | `string`  | `undefined` |


## Events

| Event                   | Description | Type               |
| ----------------------- | ----------- | ------------------ |
| `list-item-change-name` |             | `CustomEvent<any>` |
| `list-item-delete`      |             | `CustomEvent<any>` |
| `list-item-done`        |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ui-checkbox](../../atoms/ui-checkbox)
- [ui-input](../../atoms/ui-input)
- [ui-button](../../atoms/ui-button)
- [icon-mark](../../atoms/icons/icon-mark)
- [icon-x](../../atoms/icons/icon-x)
- [icon-bin](../../atoms/icons/icon-bin)

### Graph
```mermaid
graph TD;
  ui-list-item --> ui-checkbox
  ui-list-item --> ui-input
  ui-list-item --> ui-button
  ui-list-item --> icon-mark
  ui-list-item --> icon-x
  ui-list-item --> icon-bin
  ui-input --> ui-button
  style ui-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
