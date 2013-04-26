#include <node.h>
#include <v8.h>

using namespace v8;

Handle<Value> run(const Arguments& args) {
  HandleScope scope;
  return scope.Close(String::New("queue started"));
}

void init(Handle<Object> exports) {
  exports->Set(String::NewSymbol("run"),
      FunctionTemplate::New(run)->GetFunction());
}

NODE_MODULE(pqueue, init)