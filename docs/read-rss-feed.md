## Indroduction
**【Read RSS feed】**app can get rss content from rss feed url, and parse rss content to json output.

For example, ```https://medium.com/feed/hacker-daily/tagged/software-development``` RSS feed:

```xml
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:cc="http://cyber.law.harvard.edu/rss/creativeCommonsRssModule.html" version="2.0">
<channel>
<title>
<![CDATA[ Software Development in hacker-daily on Medium ]]>
</title>
<description>
<![CDATA[ Latest stories tagged with Software Development in hacker-daily on Medium ]]>
</description>
<link>https://medium.com/hacker-daily/tagged/software-development?source=rss----490335224689--software_development</link>
<image>
<url>https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png</url>
<title>Software Development in hacker-daily on Medium</title>
<link>https://medium.com/hacker-daily/tagged/software-development?source=rss----490335224689--software_development</link>
</image>
<generator>Medium</generator>
<lastBuildDate>Sun, 14 Mar 2021 12:17:34 GMT</lastBuildDate>
<atom:link href="https://medium.com/feed/hacker-daily/tagged/software-development" rel="self" type="application/rss+xml"/>
<webMaster>
<![CDATA[ yourfriends@medium.com ]]>
</webMaster>
</channel>
</rss>
```

**Read Rss Feed** can parse it to json format:

```json
[
  {
    "author": {
      "email": "yourfriends@medium.com"
    },
    "description": "Latest stories tagged with Software Development in hacker-daily on Medium",
    "extensions": {
      "atom": {
        "link": [
          {
            "attrs": {
              "href": "https://medium.com/feed/hacker-daily/tagged/software-development",
              "rel": "self",
              "type": "application/rss+xml"
            },
            "children": {},
            "name": "link",
            "value": ""
          }
        ]
      }
    },
    "feedLink": "https://medium.com/feed/hacker-daily/tagged/software-development",
    "feedType": "rss",
    "feedVersion": "2.0",
    "generator": "Medium",
    "image": {
      "title": "Software Development in hacker-daily on Medium",
      "url": "https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png"
    },
    "items": [],
    "link": "https://medium.com/hacker-daily/tagged/software-development?source=rss----490335224689--software_development",
    "title": "Software Development in hacker-daily on Medium",
    "updated": "Sun, 14 Mar 2021 12:17:34 GMT",
    "updatedParsed": "2021-03-14T12:17:34Z"
  }
]
```

<iframe 
    width="1280" 
    height="720" 
    src="https://www.youtube.com/embed/txhUMNdAXUs"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

## Parameter
> Feed

Rss feed url.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314203710709.png" alt="image-20210314203710709" style="zoom:50%;" />