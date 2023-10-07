import Vue from 'vue';
// @ts-ignore
import ToastVue from './Toast.vue';
import { CreateToast, TToast, TToastOptions, ToastType } from './type';

const Toast: TToast = {};
const instances: any[] = [];
let seed = 1;

function getLastTop() {
  const len = instances.length;
  return len > 0 ? instances[len - 1]?.$el?.style?.top : '30px';
}
function getLastOffsetHeight() {
  const len = instances.length;
  return len > 0 ? instances[len - 1]?.$el?.offsetHeight : 0;
}

export const createToast: CreateToast = (options) => {
  const appendTo = document.body;
  const { type, duration = 3000, message, showClose = false, onClose } = options;
  const ToastConstructor = Vue.extend(ToastVue);
  const instance = new ToastConstructor({
    propsData: {
      type,
      duration,
      message,
      showClose,
      index: `toast-item-${seed++}`,
      close() {
        const index = instances.findIndex((item) =>  item === instance);
        console.log(instances[index]?.$el?.offsetHeight);
        const removeHeight = parseInt(instances[index]?.$el?.offsetHeight) + 20;
        for (let i = 0; i< instances.length; i++) {
          if (i < index) {
            continue;
          } else {
            // @ts-ignore
            instances[i].$el.style.top = parseInt(instances[i].$el.style.top) - removeHeight + 'px';
          }
        }
        instances.splice(index, 1);
      },
      destroy() {
        appendTo.removeChild(instance.$el);
        instance.$destroy();
      }
    }
  });
  
  instance.$mount();
  appendTo.appendChild(instance.$el);

  const lastTop = getLastTop();
  const lastOffsetHeight = getLastOffsetHeight();

  // @ts-ignore
  instance.$el.style.top = parseInt(lastTop) + parseInt(lastOffsetHeight) + 20 + 'px';
  instances.push(instance);
};

(['info', 'waring', 'error', 'success'] as ToastType[]).forEach((type) => {
  let params: any = {};
  Toast[type] = (options: TToastOptions | string) => {
    if (typeof options === 'string') {
      params.message = options;
    } else {
      params = options;
    }

    createToast({ type, ...params })};
});

Toast.show = (options: TToastOptions) => {
  let params: any = {};
  if (typeof options === 'string') {
    params.message = options;
    params.type = 'info';
  } else {
    params = options;
  }
  return createToast({ type: 'info', ...params });
}

export {
  Toast,
}
