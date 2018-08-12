# netlify-cms-widget-reations

<!-- [Check out a demo!](https://netlify-cms-widget-reations.netlify.com/demo) -->

A widget that lets you list many records from mulitple other collections.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-relations
```

```js
import <name> from 'netlify-cms-widget-relations'

CMS.registerWidget('relations', RelationsControl, RelationsPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-relations@^1.0.0"></script>

<script>
  CMS.registerWidget('relations', RelationsControl, RelationsPreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: relations }
```

## Configuration

Explain any custom configuration steps here, or omit the section if there are none.

## Contributing

### Preparation

1. Clone or fork repo
2. have Docker, Docker for Windows or Docker for Mac installed. Make sure you can use Docker Compose
3. have any version of `npm` installed. This project only uses your `npm` to launch docker containers.

### Development

1. `$ npm run dev`

### Production

1. `$ npm run prod`

## Support

For help with this widget, open an [issue](https://github.com/<user>/<repo>) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
