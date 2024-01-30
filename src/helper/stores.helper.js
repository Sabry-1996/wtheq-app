import Vue from "vue";

export const set = (state, data) => {
  state.records = data;
};

export const create = (state, data) => {
  if (state.records.payload) {
    state.records.payload.push(data);
  } else {
    state.records.push(data);
  }
};

export const setSingleRecord = (state, data) => {
  const recordIndex = state.records.findIndex(
    (record) => record.id === data.id
  );
  if (recordIndex > -1) {
    state.records[recordIndex] = data;
  } else {
    create(state, data);
  }
};

export const update = (state, data) => {
  if (state.records.payload) {
    state.records.payload.forEach((element, index) => {
      if (element.id === data.id) {
        Vue.set(state.records.payload, index, data);
      }
    });
  } else {
    state.records.forEach((element, index) => {
      if (element.id === data.id) {
        Vue.set(state.records, index, data);
      }
    });
  }
};

export const destroy = (state, id) => {
  if (state.records.payload) {
    state.records.payload = state.records.payload.filter(
      (record) => record.id !== id
    );
  } else {
    state.records = state.records.filter((record) => record.id !== id);
  }
};
