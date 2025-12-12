def adjacency_list_to_matrix(adjlist):
    # get all vertices from the dictionary keys
    vertices = list(adjlist.keys())
    #print(vertices)
    n = len(vertices)
    #print(n)

    # create a mapping from vertex label to matrix index
    vertex_index = {vertex: i for i, vertex in enumerate(vertices)}
    #print(vertex_index) 
    
    # initialize n*n matrix with zeros
    matrix = [[0] * n for _ in range(n)]

    # fill the matrix based on adjacency list
    for vertex in vertices:
        i = vertex_index[vertex]
        for adj in adjlist[vertex]:
            if adj in vertex_index:
                j = vertex_index[adj]
                matrix[i][j] = 1
        print(matrix[i])
    return matrix


print(adjacency_list_to_matrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]}))
