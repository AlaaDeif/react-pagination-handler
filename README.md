# React-Pagination-handler

## Description

It's a ReactJS component that takes an array of JSX as a props and return a fully functioned lists with pagination.

Its very fixable and simple. you can change the styles and values of the rendered items and pagination.

## Links

[Github](https://github.com/AlaaDeif/react-pagination-handler)

## Installation

- Installation

```js
npm i react-pagination-handler
```

```js
yarn add react-pagination-handler
```

```js
import { Pagination } from 'react-pagination-handler';
```

## Example

- Default render

```JSX
import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-pagination-handler'

export default function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((json) => {
            const arr = []

            json.map((item, x)=>{
                arr.push(
                    <div style={{width: 400}} key={x}>
                        <h5>{item.id}. {item.title}</h5>
                        <p style={{fontSize: 15}}>{item.body}</p>
                    </div>
                )
            })

            setData(arr)
            setLoading(false)
        });
    },[])
    return (

        <div>
            {loading ? <h1>LOADING</h1> : <Pagination items={data} />}
        </div>
    )
}
```

![code execution](https://res.cloudinary.com/alaadeif/image/upload/v1615248258/react-pagination-handler/Default_1_ct8hfo.png)

![code execution](https://res.cloudinary.com/alaadeif/image/upload/v1615248258/react-pagination-handler/default_2_mdnnxg.png)

- ### Advanced render

```JSX
<Pagination
    items={data}
    itemsPerPage={7}
    pagesLimit={4}
    paginationContainer={{background: '#242423', padding: '10px'}}
    listContainer={{background: '#333533', display: 'flex', flexWrap: 'wrap', color: '#CFDBD5', padding:'10px'}}
    paginationLabel={{color: '#F6D579', fontSize: '1.25em'}}
    edgButton={{color: '#F6D579', background: 'none', border: 'none', fontSize: '1.5em'}}
    groupButton={{color: '#F6D579', background: 'none', border: 'none', fontSize: '1.5em'}}
    singleButton={{color: '#F6D579', background: 'none', border: 'none', fontSize: '1.25em'}}
    pageButton={{color: '#F6D579', background: 'none', border: '1px solid #F6D579', fontSize: '1.25em', padding: '5px 10px'}}
    activePageButton={{color: '#242423', background: '#F6D579', border: '1px solid #F6D579', fontSize: '1.25em', padding: '5px 10px'}}
/>
```

![code execution](https://res.cloudinary.com/alaadeif/image/upload/v1615251667/react-pagination-handler/Exaple_1_bcimku.png)

```JSX
<Pagination
    items={data}
    itemsPerPage={10}
    pagesLimit={1}
    paginationLabel={{display: 'none'}}
    edgButton={{display: 'none'}}
    groupButton={{color: '#8A817C', background: 'none', border: 'none', fontSize: '1.5em'}}
    singleButton={{fontFamily: 'fantasy', color: '#8A817C', background: '#E0AFA0', border: '1px solid #E0AFA0' ,fontSize: '1.25em', padding: '1px 10px', borderRadius:'50%', margin: '15px', boxShadow: '10px 5px 5px #8A817C'}}
    pageButton={{fontFamily: 'fantasy', color: '#E0AFA0', background: 'none', border: '1px solid #E0AFA0' ,fontSize: '1.25em', padding: '1px 10px', borderRadius:'50%', margin: '15px', boxShadow: '10px 5px 5px #E0AFA0'}}
    activePageButton={{fontFamily: 'fantasy', color: '#8A817C', background: '#E0AFA0', border: '1px solid #E0AFA0' ,fontSize: '1.25em', padding: '1px 10px', borderRadius:'50%', margin: '15px', boxShadow: '10px 5px 5px #8A817C'}}
/>
```

![code execution](https://res.cloudinary.com/alaadeif/image/upload/v1615254275/react-pagination-handler/Exaple_2_cudapi.png)

## Documentation

| Props               | Type         | Description                                                                                                                                                                               |
| ------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items - required    | Array of JSX | JSX of your elements. for example: product cards                                                                                                                                          |
| itemsPerPage        | Number       | The number of JSX you want to render in each page, default value 12                                                                                                                       |
| pagesLimit          | Number       | Number of pages before and after the active page, default value 2                                                                                                                         |
| listContainer       | Object       | Style object for the container hold your JSX elements, default is flex box with center values                                                                                             |
| paginationContainer | Object       | Style object for the pagination container, default is flex box with center values                                                                                                         |
| paginationLabel     | Object       | Style object for the pagination label                                                                                                                                                     |
| edgButton           | Object       | Edg buttons '<<' / '>>' set the active page to the first/last page, you can display it or not and change the style                                                                        |
| groupButton         | Object       | Group buttons '...' set the active page before/after the current page by the value of 'pagesLimit' to show the prev/next pagination group, you can display it or not and change the style |
| singleButton        | Object       | Single buttons '<'/'>' show the prev/next page, you can display it or not and change the style                                                                                            |
| pageButton          | Object       | The style object of pages numbers buttons                                                                                                                                                 |
| activePageButton    | Object       | The style object of active page button                                                                                                                                                    |
