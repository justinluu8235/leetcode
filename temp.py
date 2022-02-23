x= "cat"
def f():
    x = "bird"
    def g():
        x="dog"
        print(x)
    g()

f()