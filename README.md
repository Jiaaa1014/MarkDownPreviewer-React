Notes
* 
```js

const marked = require("marked");
  
  render() {
    let { content } = this.state;

    return (
      <div className="markdownApp">
        <div>
          <FormGroup>
            
            <FormControl/>
            
          </FormGroup>

        </div>
        <div
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </div>
    );
  }
}

```

* [marked packages](https://www.npmjs.com/package/marked)
