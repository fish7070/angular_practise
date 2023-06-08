import { Movie } from "../type/movie";

export const MOVIES: Movie[] = [
    { id: 1, name: '星際大戰' , tagsId: [1,4,7]},
    { id: 2, name: '阿凡達' , tagsId: [2,6,8]},
    { id: 3, name: '鐵人' , tagsId: [1,3]},
    { id: 4, name: '復仇者聯盟' , tagsId: [1,5,8,9]},
    { id: 5, name: '星際過客' , tagsId: [2]},
    { id: 6, name: '哈利波特' , tagsId: [3,6,7]},
    { id: 7, name: '魔戒' , tagsId: [3,7,9]},
    { id: 8, name: '蜘蛛人' , tagsId: [1,8]},
    { id: 9, name: 'X戰警' , tagsId: [1,9]},
  ];