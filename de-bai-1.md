## Cho tài liệu của 1 API sau:

- Tài liệu để tự vào đọc: https://picsum.photos/
- API có sử dụng query để tìm kiếm dựa theo tiêu đề được truyền vào: https://hn.algolia.com/api/v1/search?query=react

Ở trên thì, "react" chính là tiêu đề

## Yêu cầu chính

1. Fetch API, lấy ra dữ liệu danh sách các bài báo dựa theo query được truyền vào param ở API
2. Thêm tính năng loading
3. Thêm tính năng debounce - tức là đợi người dùng nhập đã rồi sau một khoảng thời gian mới fetch API (có thể sử dụng setTimeOut hoặc lodash debounce)

> Như clip sau: https://www.youtube.com/watch?v=X4sSJQ-Etfo

```jsx
setPictures([...pictures, ...newPictures]);
// newPictures là danh
```
