## Cho tài liệu của 1 API sau:

- Tài liệu để tự vào đọc: https://picsum.photos/
- API ví dụ: https://picsum.photos/v2/list?page=1&limit=8

## Yêu cầu chính

1. Fetch API, lấy ra dữ liệu danh sách toàn bộ các ảnh ngẫu nhiên
2. Thêm tính năng load more (Gợi ý: sử dụng spread operator)

- Nhìn vào API ví dụ được tôi cấp ở phía trên, ta có thể thấy rằng API này có hỗ trợ chức năng phân trang. Sử dụng tính năng phân trang dã được cung cấp cho sẵn đó để làm chức năng "Load more" (Tức là tải thêm ảnh ở phía bên dưới các ảnh đã có sẵn)

> Như clip sau: https://www.youtube.com/watch?v=WtQdjw1FtRE

- Gợi ý sử dụng spread operator như sau

```jsx
setPictures([...pictures, ...newPictures]);
// newPictures là danh
```
