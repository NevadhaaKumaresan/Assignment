import thunk from "redux-thunk";
import { moveToComplete, loadData, deleteTask} from '../Component/Task/TaskAction';
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);



const initialState = {
    taskDatas: [],
};
const responseData = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  }];

describe("Test Actions", () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Loads all task ", () => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": true
            }
        ]
      });
    });

    const expectedActions = [{
        type: "DATA",
        data: responseData
      }];
    return store.dispatch(loadData()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
    //   done();
    });
  });
});

  describe('Task action creators', () => {
    test('moveToComplete', () => {
      const data = [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": true
        }
      ]
      const moveToCompleteData = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
      const expectedAction = { type: 'MOVETOCOMPLETE', originalData:data, dataComplete: moveToCompleteData};
      expect(moveToComplete(data, moveToCompleteData)).toEqual(expectedAction);
    });

    test('delete task', () =>{
        const data = [
            {
              "userId": 1,
              "id": 1,
              "title": "delectus aut autem",
              "completed": false
            },
            {
              "userId": 1,
              "id": 2,
              "title": "quis ut nam facilis et officia qui",
              "completed": true
            }
          ]
          const deleteTaskData = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          }
          const expectedAction = { type: 'DELETETASK', originalData:data, deleteData: deleteTaskData};
          expect(deleteTask(data, deleteTaskData)).toEqual(expectedAction);
    })
  
  });