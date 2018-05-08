<pre>
  [
    '{{repeat(5)}}',
    {
      title: '{{lorem(1)}}',
      description: '{{lorem(10)}}',
      image: 'https://unsplash.it/250/250?randome&i={{ index() }}'
    }
  ]
</pre>
<p>
  babel index.js --out-dir dist
</p>
<p>
  node dist/index
</p>
