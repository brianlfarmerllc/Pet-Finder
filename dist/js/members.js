$(document).ready(()=>{function a(){$.get("/api/posts/user",a=>{p=a,p&&p.length?b():i()})}function b(){l.empty();const a=[];for(let b=0;b<p.length;b++)a.push(c(p[b]));l.append(a)}function c(a){const b=$(`<div class="mb-5 card" style="border-radius: 2em">
    <div class="card-header" style="border-top-right-radius: 2em; border-top-left-radius: 2em">
    <h4 class="card-title">${a.title}</h4>
    <h6 class="card-location">${a.location}</h6>
    <h6 class="card-category">${a.category}</h6>
   <button type="button" value="${a.id}" class="btn btn-primary edit">Edit</button>
    <button type="button" value="${a.id}" class="btn btn-danger delete" >Delete</button>
    </div>
    <div class="card-body">
      <p class="card-text">${a.body}</p>
      <img src="${a.image}" alt="" style="width:200px; height:200px">
      <br />
      <a href="mailto:${a.email}">${a.email}</a>
    </div>
  </div>`);return b}function d(){k.empty();const a=$(`<h2 style="text-align:center">No Community Posts</h2>`);k.append(a)}function e(a){let b=a||"";b&&(b="/category/"+b),$.get("/api/posts"+b,a=>{p=a,p&&p.length?(g(p),f(p)):d()})}function f(a){n.empty(),n.append(`<option selected value="All Locations">All Locations</option>`);const b=a.map(a=>a.location),c=Array.from(new Set(b));c.forEach(a=>{n.append(`<option value="${a}">${a}</option>`)})}function g(a){k.empty();const b=[];for(let c=0;c<a.length;c++)b.push(h(a[c]));k.append(b)}function h(a){const b=$(`<div class="mb-5 card" style="border-radius: 2em">
    <div class="card-header" style="border-top-right-radius: 2em; border-top-left-radius: 2em">
      <h4 class="card-title">${a.title}</h4>
      <h6 class="card-location">${a.location}</h6>
      <h6 class="card-category">${a.category}</h6>
      </div>
      <div class="card-body">
        <p class="card-text">${a.body}</p>
        <img src="${a.image}" alt="" style="width:200px; height:200px">
        <br />
        <a href="mailto:${a.email}">${a.email}</a>
      </div>
    </div>`);return b}function i(){l.empty();const a=$(`<h2 style="text-align:center">No User Posts</h2>`);l.append(a)}function j(){if(q=$(this).val(),"All Locations"===q)g(p);else{const a=p.filter(a=>a.location===q);g(a)}}const k=$("#globalPost"),l=$("#userPost"),m=$("#category"),n=$("#locations");let o,p,q="All Locations";$.get("/api/user_data").then(a=>{$(".member-name").text(a.email),o=a.id;const b=$(".navbar-header");b.append("<a class='navbar-brand' href='/newpost?User_id="+o+"'>Create a Post</a>")}),a(),e(),$(document).on("click","button.delete",function(){const b=$(this).val();$.ajax({method:"DELETE",url:"/api/posts/"+b}).then(()=>{a()}).then(()=>{e()})}),$(document).on("click","button.edit",function(){const a=$(this).val();window.location.href="/newpost?post_id="+a}),m.on("change",function(){const a=$(this).val();e(a)}),n.on("change",j)});