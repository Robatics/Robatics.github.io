import random
print("AID GAME ^~-")
print("enter four numbers")
print("decipher")
a=5
b=2
c=9
d=0

#a=random.randrange(0,9)
#b=random.randrange(0,9)
#c=random.randrange(0,9)
#d=random.randrange(0,9)

f=str(a)
g=str(b)
h=str(c)
i=str(d)
j=f+g+h+i
while True:
    print("  ")
    w=input()
    x=input()
    y=input()
    z=input()
    ct=w+x+y+z
#~3 injured,1 alive
    if z not in j and w and x and y in j and w!=f and x!=g and y!=h and z!=i:
        print("3 injured,1 alive")
    elif y not in j and w and x and z in j and w!=f and x!=g and y!=h and z!=i:
        print("3 injured,1 alive")
    elif x not in j and w and y and z in j and w!=f and x!=g and y!=h and z!=i:
        print("3 injured,1 alive")
    elif w not in j and x and y and z in j and w!=f and x!=g and y!=h and z!=i:
        print("3 injured,1 alive")

#~2 injured,2 alive
    elif y and z not in j and w and x in j and w!=f and x!=g and y!=h and z!=i:
        print("2 injured,2 alive")
    elif x and z not in j and w and y in j and w!=f and x!=g and y!=h and z!=i:
        print("2 injured,2 alive")
    elif x and y not in j and w and z in j and w!=f and x!=g and y!=h and z!=i:
        print("2 injured,2 alive")
    elif w and z not in j and x and y in j and w!=f and x!=g and y!=h and z!=i:
        print("2 injured,2 alive")
    elif w and y not in j and x and z in j and w!=f and x!=g and y!=h and z!=i:
        print("2 injured,2 alive")
    elif w and x not in j and y and y in j and w!=f and x!=g and y!=h and z!=i:
        print("2 injured,2 alive")

#~1 injured,3 alive
    elif x and y and z not in j and w in j and w!=f and x!=g and y!=h and z!=i:
        print("1 injured,3 alive")
    elif w and y and z not in j and x in j and w!=f and x!=g and y!=h and z!=i:
        print("1 injured,3 alive")
    elif w and x and z not in j and y in j and w!=f and x!=g and y!=h and z!=i:
        print("1 injured,3 alive")
    elif w and x and y not in j and z in j and w!=f and x!=g and y!=h and z!=i:
        print("1 injured,3 alive")


#~ALL ALIVE
    elif w and x and y and z not in j and w!=f and x!=g and y!=h and z!=i:
        print("ALL ALIVE")


#~ALL INJURED
    elif w and x and y and z in j and w!=f and x!=g and y!=h and z!=i:
        print("ALL INJURED")

#~ALL DEAD
    elif w==f and x==g and y==h and z==i:
        print("ALL DEAD, CODE CRACKED")
        break


#~3 dead,1 alive
    elif w==f and x==g and y==h and z not in j:
        print("3 dead,1 alive")
    elif w==f and x==g and z==i and y not in j:
        print("3 dead,1 alive")
    elif w==f and y==h and z==i and x not in j:
        print("3 dead,1 alive")
    elif x==g and y==h and z==i and w not in j:
        print("3 dead,1 alive")

#~2 dead,1 injured,1 ALIVE
    elif w in j and x not in j and w!=f and y==h and z==i:
        print("2 dead,1 injured,1 ALIVE")
    elif w in j and y not in j and w!=f and x==g and z==i:
        print("2 dead,1 injured,1 ALIVE")
    elif w in j and z not in j and w!=f and x==g and y==h:
        print("2 dead,1 injured,1 ALIVE")

    elif x in j and w not in j and x!=g and y==h and z==i:
        print("2 dead,1 injured,1 ALIVE")
    elif x in j and y not in j and x!=g and w==f and z==i:
        print("2 dead,1 injured,1 ALIVE")
    elif x in j and z not in j and x!=g and w==f and y==h:
        print("2 dead,1 injured,1 ALIVE")

    elif y in j and w not in j and y!=h and y==g and z==i:
        print("2 dead,1 injured,1 ALIVE")
    elif y in j and x not in j and y!=h and w==f and z==i:
        print("2 dead,1 injured,1 ALIVE")
    elif y in j and z not in j and y!=h and w==f and x==g:
        print("2 dead,1 injured,1 ALIVE")

    elif z in j and w not in j and z!=i and x==g and y==h:
        print("2 dead,1 injured,1 ALIVE")
    elif z in j and x not in j and z!=i and w==f and y==h:
        print("2 dead,1 injured,1 ALIVE")
    elif z in j and y not in j and z!=i and w==f and x==g:
        print("2 dead,1 injured,1 ALIVE")






#~1 dead 2 injured 1 alive
    elif x and y in j and z not in j and w==f and x!=g and y!=h:
        print("1 dead,2 injured,1 ALIVE")
    elif x and z in j and y not in j and w==f and x!=g and z!=i:
        print("1 dead,2 injured,1 ALIVE")
    elif y and z in j and x not in j and w==f and y!=h and z!=i:
        print("1 dead,2 injured,1 ALIVE")

    elif w and y in j and z not in j and x==g and w!=f and y!=h:
        print("1 dead,2 injured,1 ALIVE")
    elif w and z in j and y not in j and x==g and w!=f and z!=i:
        print("1 dead,2 injured,1 ALIVE")
    elif y and z in j and w not in j and x==g and y!=h and z!=i:
        print("1 dead,2 injured,1 ALIVE")

    elif w and x in j and z not in j and y==h and w!=f and x!=g:
        print("1 dead,2 injured,1 ALIVE")
    elif w and z in j and x not in j and y==h and w!=f and z!=i:
        print("1 dead,2 injured,1 ALIVE")
    elif x and z in j and w not in j and y==h and x!=g and z!=i:
        print("1 dead,2 injured,1 ALIVE")


    elif w and x in j and y not in j and z==i and w!=f and x!=g:
        print("1 dead,2 injured,1 ALIVE")
    elif w and y in j and x not in j and z==i and w!=f and y!=h:
        print("1 dead,2 injured,1 ALIVE")
    elif x and y in j and w not in j and z==i and x!=g and y!=h:
        print("1 dead,2 injured,1 ALIVE")

#~1 dead,1 injured, 2 alive
    elif y and z not in j and w==f:
        print("1 dead,1 injured, 2 alive")
    elif w and y in j and x and z not in j and w==f and x!=g and y!=h and z!=i:
        print("1 dead,1 injured, 2 alive")
    elif w and z in j and x and y not in j and w==f and x!=g and y!=h and z!=i:
        print("1 dead,1 injured, 2 alive")


    elif w and x in j and y and z not in j and w!=f and x==g and y!=h and z!=i:
        print("1 dead,1 injured, 2 alive")
    elif x and y in j and w and z not in j and w!=f and x==g and y!=h and z!=i:
        print("1 dead,1 injured, 2 alive")
    elif x and z in j and w and y not in j and w!=f and x==g and y!=h and z!=i:
        print("1 dead,1 injured, 2 alive")

    elif w and y in j and x and z not in j and w!=f and x!=g and y==h and z!=i:
        print("1 dead,1 injured, 2 alive")
    elif x and y in j and w and z not in j and w!=f and x!=g and y==h and z!=i:
        print("1 dead,1 injured, 2 alive")
    elif y and z in j and w and x not in j and w!=f and x!=g and y==h and z!=i:
        print("1 dead,1 injured, 2 alive")


    elif w and z in j and x and y not in j and w!=f and x!=g and y!=h and z==i:
        print("1 dead,1 injured, 2 alive")
    elif x and z in j and w and y not in j and w!=f and x!=g and y!=h and z==i:
        print("1 dead,1 injured, 2 alive")
    elif y and z in j and w and x not in j and w!=f and x!=g and y!=h and z==i:
        print("1 dead,1 injured, 2 alive")



#~2 dead,2 alive
    elif w and x in j and y and z not in j and w==f and x==g:
        print("2 dead,2 alive")
    elif w and y in j and x and z not in j and w==f and y==h:
        print("2 dead,2 alive")
    elif w and z in j and x and y not in j and w==f and z==i:
        print("2 dead,2 alive")
    elif x and y in j and w and z not in j and x==g and y==h:
        print("2 dead,2 alive")
    elif x and z in j and w and y not in j and x==g and z==i:
        print("2 dead,2 alive")
    elif y and z in j and w and x not in j and y==h and z==i:
        print("2 dead,2 alive")





#~1 dead 3 injured
    elif x and y and z in j and x!=g and y!=h and z!=i and w==f:
         print("1 dead,3 injured")
    elif w and y and z in j and w!=f and y!=h and z!=i and x==g:
        print("1 dead,3 injured")
    elif w and x and z in j and w!=f and x!=g and z!=i and y==h:
        print("1 dead,3 injured")
    elif w and x and y in j and w!=f and x!=g and y!=h and z==i:
        print("1 dead,3 injured")

#~1 dead,3 alive
    elif x and y and z not in j and w==f:
        print("1 dead,3 alive")

    elif w and y and z not in j and x==g:
        print("1 dead,3 alive")

    elif w and x and z not in j and y==h:
        print("1 dead,3 alive")

    elif w and x and y not in j and z==i:
        print("1 dead,3 alive")

#~2 dead,2 injured
    elif w==f and x==g and y and z in j:
        print("2 dead,2 injured")
    elif w==f and y==h and x and z in j:
        print("2 dead,2 injured")
    elif w==f and z==i and x and y in j:
        print("2 dead,2 injured")
    elif x==g and y==h and w and z in j:
        print("2 dead,2 injured")
    elif x==g and z==i and w and y in j:
        print("2 dead,2 injured")
    elif y==g and z==h and w and x in j:
        print("2 dead,2 injured")


print("THIS IS THE REAL CODE: ",j)
